import { Icon } from "@tabler/icons-react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonCommon = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends ButtonCommon {
  children: React.ReactNode | string;
  /** Alternative text that appears when user hover button, recommended use only one word */
  hoverText?: string;
  disableBorder?: boolean;
}

export type WobbleButtonProps = ButtonCommon;

export interface EspecularButtonProps extends ButtonCommon {
  icon?: Icon;
}
