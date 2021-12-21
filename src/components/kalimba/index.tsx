/** @jsx jsx */

import {
    contents,
    kalimbaSection,
    sheetSection,
} from "@/components/kalimba/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Presentation: FC = () => (
    <div css={contents}>
        <div css={sheetSection}>sheet section</div>
        <div css={kalimbaSection}>kalimba section</div>
    </div>
);
