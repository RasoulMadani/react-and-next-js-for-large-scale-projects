import { SVGAttributes } from "react";
import { SvgIcon } from "./icon.types";

const BaseIcon: React.FC<SvgIcon> = ({
  color = "currentColor",
  width = 24,
  height = 24,
  strokeWidth = "1.5",
  viewBox = "0 0 24 24",
  children,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      hanging={height}
      viewBox={viewBox}
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
