import musicSymbolIcon from "@/asset/music_symbol_icon.svg";
import { css } from "@emotion/react";

//#region ListModal
export const modalWrapper = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
`;
export const modalBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 320px;
    background-color: var(--colors-gray0);

    padding: 16px;
`;
export const modalContents = css``;
export const sheetList = css`
    list-style: none;
    padding: 0;

    li + li {
        padding-top: 8px;
    }
`;
export const music = css`
    display: flex;
    padding: 8px 0;
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
export const musicContents = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 8px 0 8px 16px;
`;
export const musicTitle = css`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
//#endregion
