import { writable } from "svelte/store";

export type SheetType = {
  title: string;
  data: string[];
};

export function createSheet(initialValue = { title: "", data: [] }) {
  const { subscribe, set, update } = writable<SheetType>(initialValue);
  return {
    subscribe,
    updateTitle(input) {
      update((prev) => ({
        title: input.value as string,
        data: prev.data,
      }));
    },
  };
}
