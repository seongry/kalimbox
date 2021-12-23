import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const sheet = atom({
    key: "sheet",
    default: "",
});

const parsedSheet = selector({
    key: "parsedSheet",
    get: ({ get }) => {
        const originalSheet = get(sheet);
        //TODO: iterative한 형태로 return
        return originalSheet;
    },
});

export const sheetController = () => {
    const setSheet = useSetRecoilState(sheet);
    const methods = {
        addNote: ({ code }: Pick<KalimbaKeyBarsTypes, "code">) => {
            setSheet((oldSheet) => `${oldSheet}${code}`);
        },
    };

    return {
        sheet: useRecoilValue(parsedSheet),
        ...methods,
    };
};
