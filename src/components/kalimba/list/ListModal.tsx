/** @jsx jsx */

import {
    modalBox,
    modalWrapper,
    music,
    musicContents,
    musicIcon,
    musicTitle,
    sheetList,
} from "@/components/kalimba/list/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

const Music: FC = ({ children }) => (
    <div css={music}>
        <div css={musicIcon} />
        <div css={musicContents}>
            <span css={musicTitle}>{children}</span>
        </div>
    </div>
);
export const ListModal: FC = () => {
    return (
        <div css={modalWrapper}>
            <div css={modalBox}>
                <h2>내 악보</h2>
                <ul css={sheetList}>
                    <li>
                        <Music>하울의 움직이는 성</Music>
                    </li>
                </ul>
            </div>
        </div>
    );
};
