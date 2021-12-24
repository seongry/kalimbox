import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { atom, useSetRecoilState } from "recoil";

//#region CONSTANTS
const SEPARATOR = "/" as const;
const EMPTY_SPACE = "__" as const;
//#endregion

//#region INTERFACE
interface SheetEntity {
    id: string;
    title: string;
    notes: string[];
}
interface SheetState {
    notes: SheetEntity["notes"];
}
//#endregion

//#region STATE
const titleState = atom({
    key: "form-title",
    default: "",
});
const sheetState = atom({
    key: "form-sheet",
    default: {
        notes: [],
    } as SheetState,
});
//#endregion

//#region FUNCTIONS
type FetchData<T> = (key: string) => T;
const fetchData: FetchData<SheetEntity[]> = (key) => {
    const rawData = localStorage.getItem(key) ?? "";
    const parsedData = rawData ? (JSON.parse(rawData) as SheetEntity[]) : [];

    return parsedData;
};
type SaveLocalStorage<T> = (props: { key: string; newData: T }) => void;
const saveLocalStorage: SaveLocalStorage<SheetEntity[]> = ({
    key,
    newData,
}) => {
    localStorage.setItem(key, JSON.stringify(newData));
};
//#endregion

//#region CONTROLLER
export const sheetController = () => {
    const setSheet = useSetRecoilState(sheetState);
    const setTitle = useSetRecoilState(titleState);
    const methods = {
        pushNote: ({ number, higher }: KalimbaKeyBarsTypes) => {
            setSheet(({ notes, ...rest }) => {
                return {
                    ...rest,
                    notes: [...notes, `${number}${higher}`],
                };
            });
        },
        pushSpacebar: () => {
            setSheet(({ notes, ...rest }) => {
                return {
                    ...rest,
                    notes: [...notes, `${EMPTY_SPACE}`],
                };
            });
        },
        removeLastNote: () => {
            setSheet(({ notes, ...rest }) => {
                return {
                    ...rest,
                    notes: [...notes.slice(0, -1)],
                };
            });
        },
        updateTitle: (title: string) => {
            setTitle(() => title);
        },
        submitSheetForm: ({ title, notes }: Omit<SheetEntity, "id">) => {
            if (!title || !notes) {
                return;
            }
            const key = "kalimbox-sheet-list";
            const storedData = fetchData(key);
            saveLocalStorage({
                key,
                newData: [
                    ...storedData,
                    { id: new Date().toString(), title, notes },
                ],
            });
        },
    };

    return {
        sheetState,
        titleState,
        ...methods,
    };
};
//#endregion
