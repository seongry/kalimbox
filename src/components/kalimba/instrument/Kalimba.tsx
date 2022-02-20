/** @jsx jsx */

import { Key } from "@/components/kalimba/instrument/Key";
import {
    kalimbaBody,
    keys,
    vibratingBar,
} from "@/components/kalimba/instrument/styles";
import { C_KEY } from "@/constants/KalimbaKey";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Kalimba: FC = () => (
    <div css={kalimbaBody} data-testid="kalimba-instrument">
        <div css={vibratingBar} />
        <div css={keys}>
            {C_KEY.map((item, key) => (
                <Key
                    key={key}
                    keyInfo={item}
                    index={key}
                    maxLength={C_KEY.length}
                />
            ))}
        </div>
    </div>
);
