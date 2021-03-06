import { sheetController } from "@/controllers/sheet";
import { useEffect } from "react";

enum SPECIAL_KEYBOARD_KEYS {
    Space = "Space",
    Backspace = "Backspace",
}
export const useGlobalKeydownEvent = () => {
    const { pushSpacebar, removeLastNote } = sheetController();
    const handleKeydown = (e: globalThis.KeyboardEvent) => {
        if (
            !Object.values(SPECIAL_KEYBOARD_KEYS).includes(
                e.code as SPECIAL_KEYBOARD_KEYS
            )
        ) {
            return;
        }
        if (e.code === SPECIAL_KEYBOARD_KEYS["Space"]) {
            pushSpacebar();
        }

        if (e.code === SPECIAL_KEYBOARD_KEYS["Backspace"]) {
            removeLastNote();
        }
    };
    useEffect(() => {
        const isSupported = window.addEventListener;
        if (!isSupported) return;

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);
};
