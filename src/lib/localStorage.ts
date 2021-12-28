export enum LOCAL_STORAGE_KEY {
    "sheetList" = "kalimbox-sheet-list",
}

export const fetchData = <T extends unknown>(key: string): T => {
    const rawData = localStorage.getItem(key) ?? "";
    const parsedData = rawData ? (JSON.parse(rawData) as T) : ([] as T);

    return parsedData;
};
type SaveLocalStorageProps<T> = { key: string; newData: T };
export const saveLocalStorage = <T extends unknown>({
    key,
    newData,
}: SaveLocalStorageProps<T>) => {
    localStorage.setItem(key, JSON.stringify(newData));
};
