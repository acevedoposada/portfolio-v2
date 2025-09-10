import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./link-button.module.scss";
import { cn } from "@/utils/cn";

export interface LinkButtonButtonProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: React.ReactNode | string;
}

export default function LinkButton({ children, className, ...props }: LinkButtonButtonProps) {
  return (
    <a className={cn(styles.button, className)} {...props}>
      {children}
    </a>
  );
}
