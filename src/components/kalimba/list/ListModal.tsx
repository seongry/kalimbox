/** @jsx jsx */

import {
    contents,
    deleteButton,
    deleteButtonBox,
    list,
    modalBackground,
    modalBox,
    modalTitle,
    modalWrapper,
    musicIcon,
    sheet,
    title,
} from "@/components/kalimba/list/styles";
import { MODAL, settingController } from "@/controllers/setting";
import { sheetController, SheetEntity } from "@/controllers/sheet";
import { sheetListController } from "@/controllers/sheetList";
import { jsx } from "@emotion/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, MouseEvent } from "react";
import { useRecoilValue } from "recoil";

interface SheetItemProps {
    info: SheetEntity;
}
const SheetItem: FC<SheetItemProps> = ({ info }) => {
    const { closeModal } = settingController();
    const { deleteSheet } = sheetListController();
    const { loadSheetData } = sheetController();
    const handleOnClick = () => {
        loadSheetData(info);
        closeModal(MODAL["SHEET_LIST"]);
    };
    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        deleteSheet(info.id);
    };

    return (
        <div css={sheet} onClick={handleOnClick}>
            <div css={musicIcon} />
            <div css={contents}>
                <span css={title}>{info.title}</span>
            </div>
            <div css={deleteButtonBox}>
                <button css={deleteButton} onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} size="1x" />
                </button>
            </div>
        </div>
    );
};
export const ListModal: FC = () => {
    const { closeModal } = settingController();
    const { sheetListState } = sheetListController();
    const sheetList = useRecoilValue(sheetListState);
    const handleOnClose = () => {
        closeModal(MODAL["SHEET_LIST"]);
    };

    return (
        <div css={modalWrapper}>
            <div css={modalBackground} onClick={handleOnClose} />
            <div css={modalBox}>
                <h2 css={modalTitle}>내 악보상자</h2>
                {sheetList.length > 0 && (
                    <ul css={list}>
                        {sheetList.map((item, key) => (
                            <li key={key}>
                                <SheetItem info={item} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
