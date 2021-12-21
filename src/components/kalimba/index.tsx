/** @jsx jsx */

import { Kalimba } from "@/components/kalimba/instrument/Kalimba";
import { Sheet } from "@/components/kalimba/sheet/Sheet";
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
        <div css={sheetSection}>
            <Sheet />
        </div>
        <div css={kalimbaSection}>
            <Kalimba />
            <button css={saveButton}>save</button>
        </div>
    </div>
);
