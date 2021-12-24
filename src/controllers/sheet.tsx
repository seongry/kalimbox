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
        addNote: ({ number, higher }: KalimbaKeyBarsTypes) => {
            setSheet(({ notes, ...rest }) => {
                return {
                    ...rest,
                    notes: [...notes, `${number}${higher}`],
                };
            });
        },
        addSpacebar: () => {
            setSheet(({ notes, ...rest }) => {
                return {
                    ...rest,
                    notes: [...notes, `${EMPTY_SPACE}`],
                };
            });
        },
        removeLastNote: () => {
            //TODO: removeLastNote 구현하기
        },
    };

    return {
        state: state,
        methods: methods,
    };
};
