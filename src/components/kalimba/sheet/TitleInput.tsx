/** @jsx jsx */

import { titleInput } from "@/components/kalimba/sheet/styles";
import { sheetController } from "@/controllers/sheet";
import { jsx } from "@emotion/react";
import { ChangeEvent, FC, KeyboardEvent } from "react";

export const TitleInput: FC = () => {
    const { methods } = sheetController();
    const { updateTitle } = methods;
    const handleKeydown = (e: KeyboardEvent<HTMLSpanElement>) => {
        e.stopPropagation();
    };
    const handleChange = (e: ChangeEvent<HTMLSpanElement>) => {
        updateTitle(e.target.innerText);
    };
    return (
        <span
            css={titleInput}
            role="input"
            contentEditable
            onInput={handleChange}
            onKeyDown={handleKeydown}
        />
    );
};
