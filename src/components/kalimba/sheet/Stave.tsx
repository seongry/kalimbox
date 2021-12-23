/** @jsx jsx */

import { stave } from "@/components/kalimba/sheet/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

interface StaveProps {
    sheet: string;
}
export const Stave: FC<StaveProps> = ({ sheet }) => (
    <div css={stave}>{sheet}</div>
);
