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
  notes: NotesType;
};
export type SheetStoreType = {
  initialValue: SheetType;
  updateTitle: (input: any) => void;
  updateNotes: (codeInfo: KalimbaKeyBarsTypes) => void;
};

export function createSheet(
  initialValue: SheetStoreType["initialValue"] = {
    title: "",
    notes: { main: [], sub: [] },
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
          notes: {
            main: [...prev.notes.main, note],
            sub: prev.notes.sub,
          },
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
