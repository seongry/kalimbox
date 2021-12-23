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
        //TODO: iterative한 형태로 return
        return originalSheet;
    },
});

export const sheetController = () => {
    const setSheet = useSetRecoilState(sheetState);
    const methods = {
        addNote: ({ code }: Pick<KalimbaKeyBarsTypes, "code">) => {
            setSheet((oldSheet) => `${oldSheet}${code}`);
        },
    };

    return {
        sheetState: parsedSheetState,
        ...methods,
    };
};
