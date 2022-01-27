/** @jsx jsx */

import { Kalimba } from "@/components/kalimba/instrument/Kalimba";
import { ListModal } from "@/components/kalimba/list/ListModal";
import { Sheet } from "@/components/kalimba/sheet/Sheet";
import {
    contents,
    kalimbaSection,
    notificationBox,
    notificationContents,
    notificationWrapper,
    saveButton,
    sheetSection,
} from "@/components/kalimba/styles";
import { settingController } from "@/controllers/setting";
import { sheetController } from "@/controllers/sheet";
import { useGlobalKeydownEvent } from "@/hook/useGlobalKeydownEvent";
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { useRecoilValue } from "recoil";

const SaveButton = () => {
    const { sheetState, submitSheetForm } = sheetController();
    const sheet = useRecoilValue(sheetState);
    const handleSubmit = () => {
        submitSheetForm(sheet);
    };

    return (
        <button
            css={saveButton}
            onClick={handleSubmit}
            disabled={!sheet.title.trim() || !sheet.notes.length}
        >
            save
        </button>
    );
};

const SuccessNoti = () => (
    <div css={notificationWrapper}>
        <div css={notificationBox}>
            <div css={notificationContents}>악보상자 안에 보관했어요</div>
        </div>
    </div>
);

export const Presentation = () => {
    const { showNoti } = sheetController();
    const { modalVisible } = settingController();
    useGlobalKeydownEvent();

    return (
        <Fragment>
            <div css={contents}>
                <div css={sheetSection}>
                    <Sheet />
                </div>
                <div css={kalimbaSection}>
                    <Kalimba />
                    <SaveButton />
                </div>
            </div>
            {modalVisible.sheetList && <ListModal />}
            {showNoti && <SuccessNoti />}
        </Fragment>
    );
};
