import { IRecoilId } from "@/interfaces";
import { atomFamily } from "recoil";

export const notesState = atomFamily<string[], IRecoilId>({
    key: "notes-state",
    default: [],
});
