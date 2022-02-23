import { KalimbaView } from "@/views/Kalimba";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithRecoil } from "./utils/recoil";

window.HTMLElement.prototype.scrollIntoView = jest.fn();
jest.mock("tone/build/esm", () => {
    return {
        __esModule: true,
        context: {
            state: "running",
            resume: jest.fn(() => {}),
        },
        Synth: jest.fn(() => ({
            oscillator: {
                type: "pulse",
            },
            toDestination: jest.fn(),
            triggerAttackRelease: jest.fn(),
        })),
    };
});

describe("Kalimba view", () => {
    it("필수 구성요소 visibility", () => {
        renderWithRecoil(<KalimbaView />);

        const SheetBoxButton = screen.getByRole("button", {
            name: /악보상자/i,
        });
        const TitleInput =
            screen.getByPlaceholderText(/악보 제목을 입력해주세요/i);
        const Kalimba = screen.getByTestId("kalimba-instrument");
        const SaveButton = screen.getByRole("button", { name: /save/i });

        expect(SheetBoxButton).toBeInTheDocument();
        expect(TitleInput).toBeInTheDocument();
        expect(Kalimba).toBeInTheDocument();
        expect(SaveButton).toBeInTheDocument();
    });
});

describe("Kalimba 동작 테스트", () => {
    beforeEach(() => {
        renderWithRecoil(<KalimbaView />);
    });

    it("칼림바 키를 입력하면 누른 키의 넘버가 sheet에 나타난다", () => {
        const Keys = screen.getAllByTestId("kailimba-key");
        const Sheet = screen.getByTestId("sheet");

        userEvent.click(Keys[0]); //2
        userEvent.click(Keys[1]); //7

        expect(Sheet).toHaveTextContent("27");
    });
    it("악보 구성요소를 채워야 저장 할 수 있다.", () => {
        const SaveButton = screen.getByRole("button", { name: /save/i });
        const Keys = screen.getAllByTestId("kailimba-key");
        const TitleInput =
            screen.getByPlaceholderText(/악보 제목을 입력해주세요/i);

        expect(SaveButton).toBeDisabled();

        userEvent.click(Keys[0]);
        userEvent.type(TitleInput, "hello world :)");

        expect(SaveButton).not.toBeDisabled();
    });

    it("확장 버튼을 클릭하면 Sheet의 height가 길어진다", () => {
        const Sheet = screen.getByTestId("sheet");
        const ExtendButton = screen.getByRole("button", { name: /extend/i });
        const maxHeightStyle = `max-height: 85%`;

        expect(Sheet).not.toHaveStyle(maxHeightStyle);

        userEvent.click(ExtendButton);

        expect(Sheet).toHaveStyle(maxHeightStyle);
    });
});

describe("악보 리스트", () => {
    it.todo("저장된 악보가 없다면, 메세지를 출력한다");
    it.todo("저장된 악보가 있다면, 악보를 리스트업한다");
});
