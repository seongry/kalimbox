/** @jsx jsx */

import { higher, noteSpan } from "@/components/kalimba/sheet/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

interface NoteProps {
    note: string;
}
export const Note: FC<NoteProps> = ({ note }) => (
    <span css={[noteSpan, higher(note[1])]}>{note[0]}</span>
);
