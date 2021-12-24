/** @jsx jsx */

import listIcon from "@/asset/menu_icon.svg";
import { floatButton, header } from "@/components/layout/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Header: FC = () => (
    <nav css={header}>
        <button css={floatButton}>
            <img src={listIcon} alt="sheet_list_icon" />
            <span>악보집</span>
        </button>
        칼림박스
    </nav>
);
