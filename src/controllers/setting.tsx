import { atom, useRecoilState } from "recoil";

interface Setting {
    modalVisible: {
        sheetList: boolean;
    };
}
//#region STATE
const settingState = atom({
    key: "setting",
    default: {
        modalVisible: {
            sheetList: false,
        },
    } as Setting,
});
//#endregion

//#region CONTROLLER
export const settingController = () => {
    const [setting, setSetting] = useRecoilState(settingState);
    const methods = {
        openModal: (key: string) => {
            const clone = JSON.parse(JSON.stringify(setting.modalVisible));
            clone[key] = true;

            setSetting((oldState) => ({
                ...oldState,
                modalVisible: clone,
            }));
        },
        closeModal: (key: string) => {
            const clone = JSON.parse(JSON.stringify(setting.modalVisible));
            clone[key] = false;

            setSetting((oldState) => ({
                ...oldState,
                modalVisible: clone,
            }));
        },
    };

    return {
        modalVisible: setting.modalVisible,
        ...methods,
    };
};
//#endregion
