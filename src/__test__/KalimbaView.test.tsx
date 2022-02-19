import { KalimbaView } from "@/views/Kalimba";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";

window.HTMLElement.prototype.scrollIntoView = jest.fn();
jest.mock("tone/build/esm", () => {
    return {
        __esModule: true,
        context: {
            state: "running",
            resume: jest.fn(() => {}),
        },
        Synth: jest.fn().mockImplementation(() => ({
            oscillator: {
                type: "pulse",
            },
            toDestination: jest.fn(),
        })),
    };
});

describe("Kalimba view", () => {
    beforeEach(() => {
        render(
            <RecoilRoot>
                <KalimbaView />
            </RecoilRoot>
        );
    });

    it("필수 구성요소 visibility", () => {
        expect(false).toBeTruthy();
    });
});
