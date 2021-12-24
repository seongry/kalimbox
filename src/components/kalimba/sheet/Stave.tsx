/** @jsx jsx */

import { Note } from "@/components/kalimba/sheet/Note";
import { stave } from "@/components/kalimba/sheet/styles";
import { sheetController } from "@/controllers/sheet";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Stave: FC = () => {
    const { state } = sheetController();

    return (
        <div css={stave}>
            {state.notes.map((note, key) => (
                <Note key={key} note={note} />
            ))}
        </div>
    );
};
