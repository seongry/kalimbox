import { IRecoilId } from "@/interfaces";
import { atomFamily } from "recoil";

export const titleState = atomFamily<string, IRecoilId>({
    key: "title-state",
    default: "",
});
