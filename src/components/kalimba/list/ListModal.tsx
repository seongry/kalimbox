/** @jsx jsx */

import {
    contents,
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
import { FC, useEffect } from "react";
import { useRecoilValue } from "recoil";

const SheetItem: FC = ({ children }) => (
    <div css={sheet}>
        <div css={musicIcon} />
        <div css={contents}>
            <span css={title}>{children}</span>
        </div>
    </div>
);
export const ListModal: FC = () => {
    const { closeModal } = settingController();
    const { sheetListState, loadSheetList } = sheetListController();
    const { loadSheetData } = sheetController();
    const sheetList = useRecoilValue(sheetListState);
    const handleOnClose = () => {
        closeModal(MODAL["SHEET_LIST"]);
    };
    const handleOnClick = (data: SheetEntity) => {
        loadSheetData(data);
        closeModal(MODAL["SHEET_LIST"]);
    };

    useEffect(() => {
        loadSheetList();
    }, []);

    return (
        <div css={modalWrapper}>
            <div css={modalBackground} onClick={handleOnClose} />
            <div css={modalBox}>
                <h2 css={modalTitle}>내 악보</h2>
                {sheetList.length > 0 && (
                    <ul css={list}>
                        {sheetList.map((item, key) => (
                            <li key={key} onClick={() => handleOnClick(item)}>
                                <SheetItem>{item.title}</SheetItem>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
