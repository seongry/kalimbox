/** @jsx jsx */

import { Kalimba } from "@/components/kalimba/instrument/Kalimba";
import { Sheet } from "@/components/kalimba/sheet/Sheet";
import {
    contents,
    kalimbaSection,
    saveButton,
    sheetSection,
} from "@/components/kalimba/styles";
import { sheetController } from "@/controllers/sheet";
import { useGlobalKeydownEvent } from "@/hook/useGlobalKeydownEvent";
import { jsx } from "@emotion/react";
import { FC, Fragment } from "react";
import { useRecoilValue } from "recoil";

const SaveButton: FC = () => {
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

export const Presentation: FC = () => {
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
        </Fragment>
    );
};
