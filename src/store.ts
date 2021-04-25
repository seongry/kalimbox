import { writable } from "svelte/store";
import {
  KalimbaKeyBarsTypes,
  ScaleType,
  SCALE_TYPES,
} from "./constants/KalimbaKey";

export type SheetType = {
  title: string;
  notes: string[];
};
export type SheetStoreType = {
  initialValue: SheetType;
  updateTitle: (input: any) => void;
  updateNotes: (codeInfo: KalimbaKeyBarsTypes) => void;
};

export function createSheet(
  initialValue: SheetStoreType["initialValue"] = { title: "", notes: [] }
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
          notes: [...prev.notes, note],
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
