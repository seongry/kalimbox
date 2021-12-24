import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { atom, useSetRecoilState } from "recoil";

const SEPARATOR = "/" as const;
const EMPTY_SPACE = "__" as const;

interface SheetState {
    title: string;
    notes: string[];
}
const titleState = atom({
    key: "form-title",
    default: "",
});
const sheetState = atom({
    key: "form-sheet",
    default: {
        title: "",
        notes: [],
    } as SheetState,
});

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
    };

    return {
        sheetState,
        titleState,
        methods: methods,
    };
};
