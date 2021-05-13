import { writable } from "svelte/store";
import {
  KalimbaKeyBarsTypes,
  ScaleType,
  SCALE_TYPES,
} from "./constants/KalimbaKey";
export type NotesType = {
  main: string[];
  sub: string[];
};
export type SheetType = {
  title: string;
  notes: NotesType[];
};
export type SheetStoreType = {
  initialValue: SheetType;
  updateTitle: (input: any) => void;
  updateNotes: (codeInfo: KalimbaKeyBarsTypes) => void;
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

export function createSheet(
  initialValue: SheetStoreType["initialValue"] = {
    title: "",
    notes: [],
  }
) {
  const { subscribe, update } = writable<SheetStoreType["initialValue"]>(
    initialValue
  );
  return {
    subscribe,
    updateTitle(input) {
      update((prev) => ({
        title: input.value as string,
        notes: prev.notes,
      }));
    },
    updateNotes(codeInfo: KalimbaKeyBarsTypes) {
      update((prev) => {
        const note = `${codeInfo.number}${
          codeInfo.higher === 2 ? "''" : codeInfo.higher === 1 ? "'" : ""
        }`;

        return {
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
      update((prev) => {
        return {
          title: prev.title,
          notes: removeLastNote({ notes: prev.notes, isMain: true }),
        };
      });
    },
  };
}

export function createScale(initialValue: ScaleType = SCALE_TYPES[0]) {
  const { subscribe } = writable<ScaleType>(initialValue);
  return {
    subscribe,
  };
}
