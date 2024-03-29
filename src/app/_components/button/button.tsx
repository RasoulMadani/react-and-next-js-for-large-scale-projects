import React from 'react';
import {ButtonProps, ButtonShape} from "@/app/_components/button/button.types";
import classNames from 'classnames';
import {Size} from "@/app/_components/types/size.type";
import Loading from '../loading/loading';




const sizeClasses: Record<Size, string> = {
    tiny: "btn-xs",
    small: "btn-sm",
    normal: "",
    large: "btn-lg",
};
const shapeClasses: Record<ButtonShape, string> = {
    wide: "btn-wide",
    full: "btn-block",
    square: "btn-square",
    default: "",
};
const Button: React.FC<ButtonProps> = ({  variant,
                                           size = "normal",
                                           isDisabled = false,
                                           isOutline = false,
                                           shape = "default",
                                           isLoading = false,
                                           loadingType = "spinner",
                                           loadingText = "در حال ارسال درخواست",
                                           type = "button",
                                           isLink = false,
                                           children,
                                           className,
                                           animatedIcon = false,
                                           ...rest

 }: ButtonProps) => {
    const classes=classNames(
        "btn",
        className,
        { [`btn-${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size },
        { "btn-outline": isOutline },
        { "btn-link": isLink },
        { [`${shapeClasses[shape]}`]: shape },
        { "animated-icon": animatedIcon },
        { "pointer-events-none opacity-80": isLoading }
    )

    return (
        <>
            <button type={type} disabled={isDisabled} {...rest} className={classes} >

                {isLoading ? loadingText:children }
                {isLoading && <Loading/> }
            </button>
        </>
    );
};

export  {Button}
