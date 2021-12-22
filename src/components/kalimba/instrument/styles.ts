import { BREAKPOINTS } from "@/theme/breakpoints";
import { css } from "@emotion/react";

const KEY_INFO = {
    width: "36px",
    height: "360px",
    increasement: "20px",
};

//#region Kalimba
export const kalimbaBody = css`
    width: 100%;
    height: 100%;
    max-height: ${KEY_INFO.height};
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: 12px;

    overflow: hidden;
`;

export const keys = css`
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;

    ${BREAKPOINTS["table"]} {
        overflow-x: auto;
    }

    ::-webkit-scrollbar {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--colors-gray200);
        border-radius: 16px;
        border: 4px solid var(--color-kalimba-backround);
    }
    ::-webkit-scrollbar-track {
        background-color: var(--color-kalimba-backround);
    }
`;

export const vibratingBar = css`
    position: absolute;
    top: 1.5rem;
    width: 100%;
    max-width: 820px;
    height: 25px;
    border-radius: 20px;
    background-color: var(--colors-gray0);
    box-shadow: 1px 4px 4px rgba(6, 16, 41, 0.13);
`;

//#endregion

//#region Key
const backgroundStyle = css`
    --key-middle-color: #dfe6f3;
    --key-gradient-color: rgba(160, 177, 209, 0);
    --key-gradient-color2: rgba(160, 177, 209, 0.5);

    background: linear-gradient(
            180deg,
            var(--colors-gray0) 0%,
            var(--key-middle-color) 68.75%,
            var(--key-gradient-color) 73.96%
        ),
        var(--colors-purple50);

    box-shadow: 1px 4px 8px rgba(50, 45, 68, 0.25);

    :hover {
        background: linear-gradient(
                180deg,
                var(--colors-gray0) 0%,
                var(--key-middle-color) 68.75%,
                var(--key-gradient-color) 73.96%,
                var(--key-gradient-color2) 100%
            ),
            #f0f5ff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }

    :active {
        background: linear-gradient(
                180deg,
                var(--colors-gray0) 0%,
                var(--key-middle-color) 68.75%,
                var(--key-gradient-color) 73.96%,
                var(--key-gradient-color2) 100%
            ),
            #f0f5ff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    }
`;
export const key = css`
    width: ${KEY_INFO.width};
    height: 100%;
    max-height: ${KEY_INFO.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    padding-bottom: 12px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;

    :not(:first-of-type) {
        margin-left: 0.5rem;
    }

    ${backgroundStyle}
`;

interface KeyHeightProps {
    index: number;
    maxLength: number;
}
export const keyHeight = ({ index, maxLength }: KeyHeightProps) => {
    const isOverHalf = maxLength / 2 <= index;
    const temp = isOverHalf ? -index + maxLength : index + 1;
    return css`
        top: calc(-11.25rem + ${temp} * ${KEY_INFO.increasement});
    `;
};

export const codeName = css`
    color: var(--colors-purple400);
`;
export const pianoCode = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--colors-purple400);
    border-radius: 50%;
    margin-top: 6px;
    background-color: var(--colors-purple400);
    color: var(--colors-gray0);
    line-height: 1.3;
`;
export const high = ({ level }: { level: number }) => css`
    :before {
        position: absolute;
        bottom: 62px;
        width: 100%;
        left: 0;
        text-align: center;

        ${level === 1 &&
        css`
            content: ".";
        `}
        ${level === 2 &&
        css`
            content: ":";
        `}
    }
`;
//#endregion
