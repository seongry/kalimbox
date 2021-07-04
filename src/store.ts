import { derived, Readable, writable } from "svelte/store";
import {
  KalimbaKeyBarsTypes,
  ScaleType,
  SCALE_TYPES,
  SPACEBAR,
} from "./constants/KalimbaKey";
export type NotesType = {
  main: string[];
  sub: string[];
};
export type SheetType = {
  id: string;
  title: string;
  notes: NotesType[];
};
export type SelectedNoteType = number | null;
export type UpdateSelectedType = {
  index: NonNullable<SelectedNoteType>;
  value: KalimbaKeyBarsTypes;
};
export type SheetStoreType = {
  readonly sheetInfo: Readable<SheetType>;
  readonly isValid: Readable<boolean>;
  setSheetInfoById: (sheetInfo: SheetType) => void;
  updateTitle: (input: any) => void;
  updateNotes: (codeInfo: KalimbaKeyBarsTypes | typeof SPACEBAR) => void;
  removeNote: () => void;
  saveSheet: (sheetData: SheetType) => void;
};
export type OptionStoreType = {
  scale: ScaleType;
  isExtend: boolean;
};
export type UpdateOptionType = {
  name: keyof OptionStoreType;
  value: any;
};

const MAX_NOTE_IN_ROW = 20;
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
const initalSheetData = {
  id: Date.now().toString(),
  title: "",
  notes: [],
};
const createSheet = (
  initialValue: SheetType = initalSheetData
): SheetStoreType => {
  const selectedNote = writable<number | null>(null);
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
    // selectNote(index: number | null) {
    //   _updateSelectedNote(() => index);
    // },
    // updateSelectedNote(index) {},
  };
};

export const sheetStore = createSheet();

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
