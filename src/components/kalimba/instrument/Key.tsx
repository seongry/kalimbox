/** @jsx jsx */

import {
    codeName,
    high,
    key,
    keyHeight,
    pianoCode,
} from "@/components/kalimba/instrument/styles";
import { KalimbaKeyBarsTypes } from "@/constants/KalimbaKey";
import { sheetController } from "@/controllers/sheet";
import { useAudioSound } from "@/hook/useAudioSound";
import { jsx } from "@emotion/react";
import { FC } from "react";

interface KeyProps {
    keyInfo: KalimbaKeyBarsTypes;
    index: number;
    maxLength: number;
}
export const Key: FC<KeyProps> = ({ keyInfo, index, maxLength }) => {
    const { code } = keyInfo;
    const { playOneSound } = useAudioSound();
    const { pushNote } = sheetController();

    const handleOnClick = () => {
        playOneSound({ code });
        pushNote(keyInfo);
    };

    return (
        <div
            data-testid="kailimba-key"
            css={[key, keyHeight({ index, maxLength })]}
            onClick={handleOnClick}
        >
            <span css={[codeName, high({ level: keyInfo.higher })]}>
                {keyInfo.number}
            </span>
            <span css={[codeName, pianoCode]}>{keyInfo.code}</span>
        </div>
    );
};
