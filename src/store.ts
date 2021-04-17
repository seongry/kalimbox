import { writable } from "svelte/store";

export type SheetType = {
  title: string;
  notes: string[];
};

export function createSheet(
  initialValue: SheetType = { title: "", notes: [] }
) {
  const { subscribe, update } = writable<SheetType>(initialValue);
  return {
    subscribe,
    updateTitle(input) {
      update((prev) => ({
        title: input.value as string,
        notes: prev.notes,
      }));
    },
    updateNotes(note: string) {
      update((prev) => ({
        title: prev.title,
        notes: [...prev.notes, note],
      }));
    },
  };
}
