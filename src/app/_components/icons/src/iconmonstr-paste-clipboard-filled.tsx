import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIcon){
    return (
        <BaseIcon {...props}>
            <path d="m22 7c0-.478-.379-1-1-1h-14c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h14c.478 0 1-.379 1-1zm-20 8v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm13.369-5c.408 0 .741.336.741.75s-.332.75-.741.75h-2.808l4.439 4.439c.293.293.293.768 0 1.061s-.768.293-1.061 0l-4.439-4.439v2.804c0 .411-.336.745-.75.745-.415 0-.75-.335-.75-.745 0 0 .002-2.133.003-4.612 0-.414.336-.75.75-.75 2.48-.001 4.616-.003 4.616-.003zm-11.869.637v3.363h-1.5v-3.363zm0-4.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5z"/>
        </BaseIcon>
    )
}