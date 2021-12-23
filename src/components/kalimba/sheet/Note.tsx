/** @jsx jsx */

import { higher, noteSpan } from "@/components/kalimba/sheet/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

interface NoteProps {
    note: string;
}
export const Note: FC<NoteProps> = ({ note }) => {
    const [code, high] = note;
    return <span css={[noteSpan, higher(high)]}>{code}</span>;
};
