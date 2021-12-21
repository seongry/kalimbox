import { css } from "@emotion/react";

//#region Sheet
interface SheetProps {
    isExtend: boolean;
}
export const sheet = ({ isExtend }: SheetProps) => css`
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
    border: none;
    border-bottom: 1px solid var(--colors-gray100);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    outline: none;

    ::placeholder {
        color: var(--colors-gray200);
    }
`;
export const staveBox = css`
    flex: 1 1 auto;
    width: 100%;
    max-width: calc(21 * 1.8rem);
    margin-left: 1.8rem;
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
export const extendButtonBox = css`
    width: 100%;
    background-color: var(--colors-gray0);
    position: sticky;
    bottom: 0;
    text-align: center;
    padding: 1rem;
`;
export const extendButton = css`
    width: 6rem;
    font-size: 2rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    :hover {
        background-color: var(--colors-gray50);
    }

    :active {
        background-color: transparent;
    }
`;
//#endregion
