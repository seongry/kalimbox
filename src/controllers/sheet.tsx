import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const SEPARATOR = "/" as const;
const EMPTY_SPACE = "__" as const;

interface SheetState {
    title: string;
    notes: string[];
}
const sheetState = atom({
    key: "sheet",
    default: {
        title: "",
        notes: [],
    } as SheetState,
});

export const sheetController = () => {
    const state = useRecoilValue(sheetState);
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
    };

    return {
        state: state,
        methods: methods,
    };
};
