import { KalimbaView } from "@/views/Kalimba";
import { render, screen } from "@testing-library/react";
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
        const SheetBoxButton = screen.getByRole("button", {
            name: /악보상자/i,
        });
        const SheetTitle =
            screen.getByPlaceholderText(/악보 제목을 입력해주세요/i);
        const Kalimba = screen.getByTestId("kalimba-instrument");
        const SaveButton = screen.getByRole("button", { name: /save/i });

        expect(SheetBoxButton).toBeInTheDocument();
        expect(SheetTitle).toBeInTheDocument();
        expect(Kalimba).toBeInTheDocument();
        expect(SaveButton).toBeInTheDocument();
    });
});
