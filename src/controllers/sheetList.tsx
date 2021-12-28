import { fetchData, LOCAL_STORAGE_KEY } from "@/lib/localStorage";
import { atom, useSetRecoilState } from "recoil";
import { SheetEntity } from "./sheet";

//#region STATE
const sheetListState = atom({
    key: "sheet_list",
    default: [] as SheetEntity[],
});
//#endregion

//#region CONTROLLER
export const sheetListController = () => {
    const setSheetList = useSetRecoilState(sheetListState);
    const methods = {
        loadSheetList: () => {
            const key = LOCAL_STORAGE_KEY.sheetList;
            const storedData = fetchData<SheetEntity[]>(key);

            setSheetList(storedData);
        },
    };

    return {
        sheetListState,
        ...methods,
    };
};
//#endregion
