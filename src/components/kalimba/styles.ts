import { css, keyframes } from "@emotion/react";

export const contents = css`
    --color-kalimba-backround: #e0e9ff;

    flex: 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    background-color: var(--color-kalimba-backround);
    position: relative;
`;
export const sheetSection = css`
    width: 100%;
    height: 100%;
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
    margin-bottom: 24px;
    user-select: none;

    color: var(--colors-gray0);
    font-size: 18px;
    font-weight: 500;

    :disabled {
        background-color: var(--colors-gray300);
        color: var(--colors-gray100);
        cursor: default;
    }
`;

//#region SuccessNoti
export const notificationWrapper = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 100;
`;

const show = keyframes`
    from {
        opacity: 0;
        top: 12px;
    }
    
    50% {
        top: 12px;
    }

    to {
        opacity: 1;
        top: 0;
    }
`;

export const notificationBox = css`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    animation: 0.8s ease-in ${show};
`;
export const notificationContents = css`
    display: inline-block;
    padding: 16px;
    margin: 20vh auto 0;
    border-radius: 4px;
    background-color: var(--colors-gray0);
    border: 1px solid var(--colors-gray50);
    box-shadow: 1px 4px 8px rgb(6 16 41 / 13%);
`;
//#endregion
