/** @jsx jsx */

import { Stave } from "@/components/kalimba/sheet/Stave";
import {
    extendButton,
    extendButtonBox,
    sheetBox,
    staveBox,
    titleBox,
} from "@/components/kalimba/sheet/styles";
import { TitleInput } from "@/components/kalimba/sheet/TitleInput";
import { jsx } from "@emotion/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

export const Sheet: FC = () => {
    const [isExtend, setIsExtend] = useState(false);
    const toggleExtend = () => setIsExtend(!isExtend);

    return (
        <div css={sheetBox({ isExtend })}>
            <div css={titleBox}>
                <TitleInput />
            </div>
            <div css={staveBox}>
                <Stave />
            </div>
            <div css={extendButtonBox}>
                <button css={extendButton} onClick={toggleExtend}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
        </div>
    );
};
