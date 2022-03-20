import { SerializableParam } from "recoil";

export interface IRecoilId extends Readonly<Record<string, SerializableParam>> {
    id: string;
}
