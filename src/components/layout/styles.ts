import { css } from "@emotion/react";

//#region Header
export const header = css`
    --colors-background-header: rgba(224, 233, 255, 0.5);

    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 64px;

    background-color: var(--colors-background-header);
    color: var(--colors-black);
    font-size: 16px;
`;
export const floatButton = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    margin: 16px;
    font-size: 12px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`;
//#endregion

//#region Footer
export const footer = css`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--colors-gray0);
    color: var(--colors-gray500);
    padding: 16px;

    font-size: 12px;
`;
export const introLink = css`
    color: var(--colors-purple300);
    text-decoration: none;
    margin: 0 4px;
`;

//#endregion

//#region Layout
export const layout = css`
    width: 100%;
    height: 100%;
    display: grid;
    min-height: 100vh;
    grid-template-rows: 64px auto min-content;
`;

export const contents = css`
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
`;
//#endregion
