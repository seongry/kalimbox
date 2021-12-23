import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { atom, selector, useSetRecoilState } from "recoil";

const sheetState = atom({
    key: "sheet",
    default: "",
});

const parsedSheetState = selector({
    key: "parsedSheet",
    get: ({ get }) => {
        const originalSheet = get(sheetState);
        return originalSheet.split("/");
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
    };

    return {
        sheetState: parsedSheetState,
        ...methods,
    };
};
