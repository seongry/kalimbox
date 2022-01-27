import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import {
    fetchData,
    LOCAL_STORAGE_KEY,
    saveLocalStorage,
} from "@/lib/localStorage";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

//#region CONSTANTS
const SEPARATOR = "/" as const;
const EMPTY_SPACE = "__" as const;
//#endregion

//#region INTERFACE
export interface SheetEntity {
    id: string | null;
    title: string;
    notes: string[];
}
//#endregion

//#region STATE
const sheetState = atom({
    key: "sheet",
    default: {
        id: null,
        title: "",
        notes: [],
    } as SheetEntity,
});

const modalState = atom({
    key: "sheet-modal",
    default: {
        success: false,
    },
});
//#endregion

//#region CONTROLLER
export const sheetController = () => {
    const [showNoti, setShowNoti] = useRecoilState(modalState);
    const setSheet = useSetRecoilState(sheetState);
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
            setSheet((old) => ({
                ...old,
                title,
            }));
        },
        submitSheetForm: (formData: SheetEntity) => {
            const { id, title, notes } = formData;
            if (!title || !notes) {
                return;
            }
            const key = LOCAL_STORAGE_KEY.sheetList;
            const storedData = fetchData<SheetEntity[]>(key);

            if (id && storedData.find((item) => id === item.id)) {
                saveLocalStorage<SheetEntity[]>({
                    key,
                    newData: [
                        ...storedData.map((item) => {
                            if (id === item.id) {
                                return formData;
                            }
                            return item;
                        }),
                    ],
                });
            } else {
                saveLocalStorage<SheetEntity[]>({
                    key,
                    newData: [
                        ...storedData,
                        { id: new Date().toString(), title, notes },
                    ],
                });
            }

            setShowNoti({ success: true });

            setTimeout(() => {
                setShowNoti({ success: false });
            }, 1500);
        },
        loadSheetData: (sheetInfo: SheetEntity) => {
            setSheet(sheetInfo);
        },
    };

    return {
        sheetState,
        ...methods,
        showNoti: showNoti.success,
    };
};
//#endregion
