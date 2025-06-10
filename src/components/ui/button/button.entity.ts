import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | string;
  /** Alternative text that appears when user hover button, recommended use only one word */
  hoverText?: string;
  disableBorder?: boolean;
}

export interface WobbleButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
