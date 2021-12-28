/** @jsx jsx */

import {
    contents,
    list,
    modalBox,
    modalTitle,
    modalWrapper,
    musicIcon,
    sheet,
    title,
} from "@/components/kalimba/list/styles";
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
    const { sheetListState, loadSheetList } = sheetListController();
    const sheetList = useRecoilValue(sheetListState);

    useEffect(() => {
        loadSheetList();
    }, []);

    return (
        <div css={modalWrapper}>
            <div css={modalBox}>
                <h2 css={modalTitle}>내 악보</h2>
                {sheetList.length > 0 && (
                    <ul css={list}>
                        {sheetList.map(({ title }, key) => (
                            <li key={key}>
                                <SheetItem>{title}</SheetItem>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
