/** @jsx jsx */

import { Stave } from "@/components/kalimba/sheet/Stave";
import {
    extendButton,
    extendButtonBox,
    sheetBox,
    staveBox,
    titleBox,
    titleInput,
} from "@/components/kalimba/sheet/styles";
import { sheetController } from "@/controllers/sheet";
import { jsx } from "@emotion/react";
import { FC, useState } from "react";

export const Sheet: FC = () => {
    const [isExtend, setIsExtend] = useState(false);
    const toggleExtend = () => setIsExtend(!isExtend);
    const { sheet } = sheetController();

    return (
        <div css={sheetBox({ isExtend })}>
            <div css={titleBox}>
                <span css={titleInput} role="input" contentEditable />
            </div>
            <div css={staveBox}>
                <Stave sheet={sheet} />
            </div>
            <div css={extendButtonBox}>
                <button css={extendButton} onClick={toggleExtend}>
                    😊
                </button>
            </div>
        </div>
    );
};
