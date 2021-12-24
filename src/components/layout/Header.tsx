/** @jsx jsx */

import listIcon from "@/asset/menu_icon.svg";
import { floatBox, header, iconButton } from "@/components/layout/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Header: FC = () => (
    <nav css={header}>
        <div css={floatBox}>
            <button css={iconButton}>
                <img src={listIcon} alt="sheet_list_icon" />
                <span>악보집</span>
            </button>
        </div>
        칼림박스
    </nav>
);
