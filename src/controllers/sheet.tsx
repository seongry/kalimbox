import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import {
    fetchData,
    LOCAL_STORAGE_KEY,
    saveLocalStorage,
} from "@/lib/localStorage";
import { atom, useSetRecoilState } from "recoil";

//#region CONSTANTS
const SEPARATOR = "/" as const;
const EMPTY_SPACE = "__" as const;
//#endregion

//#region INTERFACE
export interface SheetEntity {
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
            const key = LOCAL_STORAGE_KEY.sheetList;
            const storedData = fetchData<SheetEntity[]>(key);
            saveLocalStorage<SheetEntity[]>({
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
