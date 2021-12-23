/** @jsx jsx */

import { Note } from "@/components/kalimba/sheet/Note";
import { stave } from "@/components/kalimba/sheet/styles";
import { sheetController } from "@/controllers/sheet";
import { jsx } from "@emotion/react";
import { FC } from "react";
import { useRecoilValue } from "recoil";

export const Stave: FC = () => {
    const { sheetState } = sheetController();
    const sheet = useRecoilValue(sheetState);

    return (
        <div css={stave}>
            {sheet.map((note, key) => (
                <Note key={key} note={note} />
            ))}
        </div>
    );
};
