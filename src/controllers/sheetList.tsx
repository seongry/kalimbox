import {
    fetchData,
    LOCAL_STORAGE_KEY,
    saveLocalStorage,
} from "@/lib/localStorage";
import { atom, useRecoilState } from "recoil";
import { SheetEntity } from "./sheet";

//#region STATE
const sheetListState = atom({
    key: "sheet_list",
    default: [] as SheetEntity[],
});
//#endregion

//#region CONTROLLER
export const sheetListController = () => {
    const [sheetList, setSheetList] = useRecoilState(sheetListState);
    const methods = {
        loadSheetList: () => {
            const key = LOCAL_STORAGE_KEY.sheetList;
            const storedData = fetchData<SheetEntity[]>(key);

            setSheetList(storedData);
        },
        deleteSheet: (id: SheetEntity["id"]) => {
            const key = LOCAL_STORAGE_KEY.sheetList;
            const result = [...sheetList.filter((item) => id !== item.id)];
            saveLocalStorage<SheetEntity[]>({
                key,
                newData: result,
            });
            setSheetList(result);
        },
    };

    return {
        sheetListState,
        ...methods,
    };
};
//#endregion
