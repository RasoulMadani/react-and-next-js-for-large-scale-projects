import { ComponentBase } from "../types/component-base.type";

export type AvatarPros = Omit<ComponentBase, "isDisabled"> & {
    src?: string;
    alt?: string;
};
