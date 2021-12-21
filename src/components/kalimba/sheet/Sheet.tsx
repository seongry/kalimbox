/** @jsx jsx */

import {
    extendButton,
    extendButtonBox,
    sheet,
    staveBox,
    titleBox,
    titleInput,
} from "@/components/kalimba/sheet/styles";
import { jsx } from "@emotion/react";
import { FC, useState } from "react";

export const Sheet: FC = () => {
    const [isExtend, setIsExtend] = useState(false);
    const toggleExtend = () => setIsExtend(!isExtend);

    return (
        <div css={sheet({ isExtend })}>
            <div css={titleBox}>
                <input
                    css={titleInput}
                    type="input"
                    placeholder="악보 제목을 입력해주세요"
                />
            </div>
            <div css={staveBox}>stave section</div>
            <div css={extendButtonBox}>
                <button css={extendButton} onClick={toggleExtend}>
                    😊
                </button>
            </div>
        </div>
    );
};
