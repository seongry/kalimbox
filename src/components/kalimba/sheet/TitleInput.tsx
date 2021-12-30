/** @jsx jsx */

import { titleInput } from "@/components/kalimba/sheet/styles";
import { sheetController } from "@/controllers/sheet";
import { jsx } from "@emotion/react";
import { ChangeEvent, FC, KeyboardEvent } from "react";
import { useRecoilValue } from "recoil";

export const TitleInput: FC = () => {
    const { sheetState, updateTitle } = sheetController();
    const { title } = useRecoilValue(sheetState);
    const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateTitle(e.target.value);
    };
    return (
        <input
            css={titleInput}
            onInput={handleChange}
            onKeyDown={handleKeydown}
            placeholder="악보 제목을 입력해주세요"
            value={title}
        />
    );
};
