import musicSymbolIcon from "@/asset/music_symbol_icon.svg";
import { css, keyframes } from "@emotion/react";

//#region ListModal
export const modalWrapper = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;
const raise = keyframes`
    from {
        background-color: transparent;
    }

    to {
        background-color: rgba(0, 0, 0, 0.25);
    }
`;
export const modalBackground = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    animation: ${raise} 0.1s ease-in-out;
    z-index: -1;
`;

const slideLeftToRight = (width: number) =>
    keyframes`
    from {
        transform: translateX(${-1 * width}px);
    }

    to {
        transform: translateX(0);
    }
`;
const widthSize = 320;
export const modalBox = css`
    display: flex;
    flex-direction: column;
    width: ${widthSize}px;
    height: 100%;
    background-color: var(--colors-gray0);

    padding: 16px 8px;

    animation: ${slideLeftToRight(widthSize)} 0.3s ease-in-out;
`;

export const modalTitle = css`
    padding: 0 8px;
`;
export const modalContents = css``;
export const list = css`
    list-style: none;
    padding: 0;

    li + li {
        padding-top: 8px;
    }
`;
export const sheet = css`
    display: flex;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: box-shadow 0.3s;

    :hover {
        box-shadow: 1px 4px 16px var(--colors-dark_gray);
    }
`;
export const musicIcon = css`
    border-radius: 4px;
    width: 56px;
    height: 56px;
    filter: drop-shadow(1px 2px 4px rgba(6, 16, 41, 0.13));

    background-image: url(${musicSymbolIcon});
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
`;
export const contents = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px 0 8px 16px;
`;
export const title = css`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const deleteButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const deleteButton = css`
    background: transparent;
    padding: 4px;
    color: var(--colors-purple200);
    cursor: pointer;

    outline: none;
    border: none;

    :hover {
        color: var(--colors-purple300);
    }
`;
//#endregion
