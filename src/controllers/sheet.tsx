import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { atom, selector, useSetRecoilState } from "recoil";

const SEPARATOR = "/" as const;
const EMPTY_SPACE = "__" as const;
const sheetState = atom({
    key: "sheet",
    default: "",
});

const parsedSheetState = selector({
    key: "parsedSheet",
    get: ({ get }) => {
        const originalSheet = get(sheetState);
        return originalSheet.split(SEPARATOR);
    },
});

export const sheetController = () => {
    const setSheet = useSetRecoilState(sheetState);
    const methods = {
        addNote: ({ number, higher }: KalimbaKeyBarsTypes) => {
            setSheet((oldSheet) => {
                if (!oldSheet) {
                    return `${number}${higher}`;
                }
                return `${oldSheet}/${number}${higher}`;
            });
        },
        addSpacebar: () => {
            setSheet((oldSheet) => {
                if (!oldSheet) {
                    return EMPTY_SPACE;
                }
                return `${oldSheet}${SEPARATOR}${EMPTY_SPACE}`;
            });
        },
        removeLastNote: () => {
            //TODO: removeLastNote 구현하기
        },
    };

    return {
        sheetState: parsedSheetState,
        ...methods,
    };
};
