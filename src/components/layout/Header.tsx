/** @jsx jsx */

import listIcon from "@/asset/menu_icon.svg";
import { floatBox, header, iconButton } from "@/components/layout/styles";
import { MODAL, settingController } from "@/controllers/setting";
import { sheetListController } from "@/controllers/sheetList";
import { jsx } from "@emotion/react";
import { FC } from "react";

const ListButton: FC = () => {
    const { loadSheetList } = sheetListController();
    const { openModal } = settingController();
    const handleOnClick = () => {
        loadSheetList();
        openModal(MODAL["SHEET_LIST"]);
    };
    return (
        <button css={iconButton} onClick={handleOnClick}>
            <img src={listIcon} alt="sheet_list_icon" />
            <span>악보집</span>
        </button>
    );
};
export const Header: FC = () => (
    <nav css={header}>
        <div css={floatBox}>
            <ListButton />
        </div>
        칼림박스
    </nav>
);
