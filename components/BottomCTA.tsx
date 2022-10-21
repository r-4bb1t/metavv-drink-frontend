import { ComponentProps, HTMLAttributes } from "react";
import common from "../styles/Common.module.scss";

export const BottomCTA = ({
  disabled,
  onClick,
  children,
}: ComponentProps<"button">) => {
  return (
    <button className={common.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
