/** @jsx jsx */

import { Kalimba } from "@/components/kalimba/instrument/Kalimba";
import {
    contents,
    kalimbaSection,
    saveButton,
    sheetSection,
} from "@/components/kalimba/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Presentation: FC = () => (
    <div css={contents}>
        <div css={sheetSection}>sheet section</div>
        <div css={kalimbaSection}>
            <Kalimba />
            <button css={saveButton}>save</button>
        </div>
    </div>
);
