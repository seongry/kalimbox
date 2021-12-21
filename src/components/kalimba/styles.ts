import { css } from "@emotion/react";

export const contents = css`
    flex: 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    background-color: #e0e9ff;
`;
export const sheetSection = css`
    width: 100%;
    height: 100%;
    position: relative;
`;
export const kalimbaSection = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const saveButton = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 40px;
    background-color: var(--colors-black);
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    margin-bottom: 16px;

    color: var(--colors-gray0);
    font-size: 18px;
    font-weight: 500;
    font-family: Roboto;

    :disabled {
        background-color: var(--colors-gray300);
        color: var(--colors-gray100);
        cursor: default;
    }
`;
