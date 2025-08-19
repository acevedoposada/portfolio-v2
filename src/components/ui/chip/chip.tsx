import { cn } from "@/utils/cn";

import { ChipProps } from "./chip.entity";
import styles from './chip.module.scss';

export default function Chip({
  children,
  variant = 'outlined',
  color = 'white',
  className,
  ...props
}: ChipProps): JSX.Element {
  return (
    <span
      className={cn(
        styles.chip,
        styles[`chip__${variant}`],
        styles[`chip__${variant}--${color}`],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}