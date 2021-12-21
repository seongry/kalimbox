/** @jsx jsx */

import {
    codeName,
    high,
    key,
    keyHeight,
    pianoCode,
} from "@/components/kalimba/instrument/styles";
import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { jsx } from "@emotion/react";
import { FC } from "react";

interface KeyProps {
    keyInfo: KalimbaKeyBarsTypes;
    index: number;
    maxLength: number;
}
export const Key: FC<KeyProps> = ({ keyInfo, index, maxLength }) => (
    <div css={[key, keyHeight({ index, maxLength })]}>
        <span css={[codeName, high({ level: keyInfo.higher })]}>
            {keyInfo.number}
        </span>
        <span css={[codeName, pianoCode]}>{keyInfo.code}</span>
    </div>
);
