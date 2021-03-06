import { css, keyframes } from "@emotion/react";

//#region Sheet
interface SheetProps {
    isExtend: boolean;
}
export const sheetBox = ({ isExtend }: SheetProps) => css`
    width: 100%;
    height: 100%;
    max-height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--colors-gray0);
    padding-top: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    overflow: overlay;
    transition: max-height 0.25s ease-in;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: 1px 4px 8px rgb(6 16 41 / 13%);

    ${isExtend &&
    css`
        max-height: 85%;
        transition: max-height 0.25s ease-out;
    `}
`;
export const titleBox = css`
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
`;
export const titleInput = css`
    min-width: 220px;
    max-width: 800px;
    border: none;
    border-bottom: 1px solid var(--colors-gray50);
    padding-bottom: 8px;

    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;

    outline: none;

    ::placeholder {
        color: var(--colors-gray100);
    }
`;
export const extendButtonBox = css`
    width: 100%;
    background-color: var(--colors-gray0);
    position: sticky;
    bottom: 0;
    text-align: center;
    padding: 16px;
`;
export const extendButton = css`
    width: 6rem;
    border: none;
    border-radius: 8px;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--colors-gray100);

    :hover {
        color: var(--colors-gray200);
    }

    :active {
        color: var(--colors-gray200);
    }
`;

export const staveBox = css`
    flex: 1;
    width: 80%;
    max-width: 800px;
    overflow: hidden;

    :hover {
        overflow-y: overlay;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: var(--colors-gray300);
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
`;
//#endregion

//#region Stave
export const stave = css`
    padding: 24px 0;
    display: flex;
    font-size: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 3rem;
`;
//#endregion

//#region Note
const underline = keyframes`
    from, to {
        border-bottom: 2px solid var(--colors-gray0);
    }

    50% {
        border-bottom: 2px solid var(--colors-purple200);
    }
`;
export const noteSpan = css`
    letter-spacing: 4px;
    animation: ${underline} 0.5s ease-in-out;
    text-align: center;
`;
const higherStyle = css`
    position: absolute;
    top: -1rem;
    width: 100%;
    text-align: center;
`;
export const higher = (high: string) => css`
    position: relative;

    ${high === "_" &&
    css`
        color: transparent;
    `}
    ${high === "1" &&
    css`
        :before {
            content: ".";
            ${higherStyle}
        }
    `}
    ${high === "2" &&
    css`
        :before {
            content: ":";
            ${higherStyle}
        }
    `}
`;
//#endregion
