import { derived, Readable, writable } from "svelte/store";
import {
  KalimbaKeyBarsTypes,
  ScaleType,
  SCALE_TYPES,
  SPACEBAR,
} from "./constants/KalimbaKey";

//#region TYPES
export type NotesType = {
  main: string[];
  sub: string[];
};
export type SheetType = {
  id: string;
  title: string;
  notes: NotesType[];
};
export type SelectedNoteType = {
  row: number;
  isMain: boolean;
  index: number | null;
} | null;
export type SheetStoreType = {
  readonly sheetInfo: Readable<SheetType>;
  readonly isValid: Readable<boolean>;
  readonly selectedNote: Readable<SelectedNoteType>;
  setSheetInfoById: (sheetInfo: SheetType) => void;
  updateTitle: (input: any) => void;
  updateNotes: (codeInfo: KalimbaKeyBarsTypes | typeof SPACEBAR) => void;
  removeNote: () => void;
  saveSheet: (sheetData: SheetType) => void;
  selectNote: (indexInfo: SelectedNoteType) => void;
  insertSelectedNote: (props: {
    codeInfo: KalimbaKeyBarsTypes;
    selectedNote: SelectedNoteType;
  }) => void;
};
export type OptionStoreType = {
  scale: ScaleType;
  isExtend: boolean;
};
export type UpdateOptionType = {
  name: keyof OptionStoreType;
  value: any;
};
//#endregion

//#region CONSTANTS
const MAX_NOTE_IN_ROW = 20;
const NOT_SELECTED = null;
//#endregion

//#region METHODS
type InsertRowType = { prevNotes: NotesType[]; note: string; isMain: boolean };
const insertNote = ({
  prevNotes,
  note,
  isMain,
}: InsertRowType): NotesType[] => {
  const lastRowIndex = prevNotes.length - 1;
  const noteCountInLastRow = isMain
    ? prevNotes[lastRowIndex]?.main.length ?? 0
    : prevNotes[lastRowIndex]?.sub.length ?? 0;

  if (noteCountInLastRow >= MAX_NOTE_IN_ROW || lastRowIndex < 0) {
    const newNotes: NotesType = isMain
      ? {
          main: [note],
          sub: [],
        }
      : {
          main: [],
          sub: [note],
        };

    return [...prevNotes, newNotes];
  }

  return prevNotes.map((row, index) => {
    if (index === lastRowIndex) {
      const newNotes: NotesType = isMain
        ? {
            main: [...row.main, note],
            sub: row.sub,
          }
        : {
            main: row.main,
            sub: [...row.sub, note],
          };

      return newNotes;
    } else {
      return row;
    }
  });
};
type InsertAdditionalNoteType = Omit<InsertRowType, "isMain"> & {
  indexInfo: SelectedNoteType;
};
const insertAdditionalNote = ({
  prevNotes,
  note,
  indexInfo,
}: InsertAdditionalNoteType): NotesType[] => {
  const copied: NotesType[] = JSON.parse(JSON.stringify(prevNotes));

  if (indexInfo.isMain) {
    copied[indexInfo.row]["main"][indexInfo.index] += note;
  } else {
    copied[indexInfo.row]["sub"][indexInfo.index] += note;
  }

  return copied;
};

type RemoveLastNoteProps = { notes: NotesType[]; isMain: boolean };
const removeLastNote = ({
  notes,
  isMain,
}: RemoveLastNoteProps): NotesType[] => {
  if (notes.length === 0) {
    return [];
  }

  const lastRow = notes.slice(-1).pop();
  const notesWithoutLast = notes.slice(0, -1);

  const removedNote = isMain
    ? {
        main: lastRow.main.slice(0, -1),
        sub: lastRow.sub,
      }
    : {
        main: lastRow.main,
        sub: lastRow.sub.slice(0, -1),
      };

  return removedNote.main.length === 0 && removedNote.sub.length === 0
    ? notesWithoutLast
    : notesWithoutLast.concat([removedNote]);
};
//#endregion

//#region sheetStore
const initalSheetData = {
  id: Date.now().toString(),
  title: "",
  notes: [],
};
const createSheet = (
  initialValue: SheetType = initalSheetData
): SheetStoreType => {
  const selectedNote = writable<SelectedNoteType>(NOT_SELECTED);
  const sheet = writable<SheetType>(initialValue);
  return {
    get sheetInfo() {
      return sheet;
    },
    get isValid() {
      return derived(
        sheet,
        ($sheet) => $sheet.title && $sheet.notes.length > 0
      );
    },
    get selectedNote() {
      return derived(selectedNote, ($selectedNote) => $selectedNote);
    },
    setSheetInfoById(sheetInfo) {
      sheet.set(sheetInfo);
    },
    updateTitle(input) {
      sheet.update((prev) => ({
        id: prev.id,
        title: input.value as string,
        notes: prev.notes,
      }));
    },
    updateNotes(codeInfo) {
      sheet.update((prev) => {
        const note =
          codeInfo === SPACEBAR
            ? SPACEBAR
            : `${codeInfo.number}${
                codeInfo.higher === 2 ? "''" : codeInfo.higher === 1 ? "'" : ""
              }`;

        return {
          id: prev.id,
          title: prev.title,
          notes: insertNote({
            prevNotes: prev.notes,
            note: note,
            isMain: true,
          }),
        };
      });
    },
    removeNote() {
      sheet.update((prev) => {
        return {
          id: prev.id,
          title: prev.title,
          notes: removeLastNote({ notes: prev.notes, isMain: true }),
        };
      });
    },
    saveSheet(sheetData) {
      const parsedSheetList =
        JSON.parse(localStorage.getItem("__sheetList")) ?? [];
      const newData = JSON.stringify([...parsedSheetList, sheetData]);

      localStorage.setItem("__sheetList", newData);
    },
    selectNote(indexInfo) {
      selectedNote.update((prev) => {
        const sameValue =
          prev?.index === indexInfo.index &&
          prev?.row === indexInfo.row &&
          prev?.isMain === indexInfo.isMain;

        return sameValue ? NOT_SELECTED : indexInfo;
      });
    },
    insertSelectedNote({ codeInfo, selectedNote }) {
      sheet.update((prev) => {
        const note = `${codeInfo.number}${
          codeInfo.higher === 2 ? "''" : codeInfo.higher === 1 ? "'" : ""
        }`;
        return {
          id: prev.id,
          title: prev.title,
          notes: insertAdditionalNote({
            prevNotes: prev.notes,
            note: note,
            indexInfo: selectedNote,
          }),
        };
      });
    },
  };
};

export const sheetStore = createSheet();
//#region

//#region OptionStore
const initialOption: OptionStoreType = {
  scale: SCALE_TYPES[0],
  isExtend: false,
};
export function createOption(initialValue: OptionStoreType = initialOption) {
  const { subscribe, update } = writable<OptionStoreType>(initialValue);

  return {
    subscribe,
    updateOption({ name, value }: UpdateOptionType) {
      switch (name) {
        case "scale":
          update((prev) => ({ scale: value, isExtend: prev.isExtend }));
          break;
        case "isExtend":
          update((prev) => ({ scale: prev.scale, isExtend: value }));
          break;
      }
    },
  };
}
//#endregion
