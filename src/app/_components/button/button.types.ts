import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";
import {LoadingBehavior} from "@/app/_components/types/loading-behavior.types";


export type ButtonShape = "default" | "wide" | "full" | "square";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentBase & LoadingBehavior & {
    isOutline?: boolean;
    shape?: ButtonShape;
    isLink?: boolean;
    animatedIcon?:boolean;
};