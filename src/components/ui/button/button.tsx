"use client";

import { motion } from "framer-motion";

import { ButtonProps, EspecularButtonProps, WobbleButtonProps } from "./button.entity";
import styles from "./button.module.scss";
import { useRef, useState } from "react";
import { cn } from "@/utils/cn";

export const FluidButton = ({
  children,
  hoverText,
  className,
  disableBorder,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, className)} {...buttonProps}>
      {!disableBorder && <span className={styles.button__border} />}
      <span className={styles.button__ripple}>
        <span />
      </span>
      <span className={styles.button__title}>
        <span data-text={hoverText || children}>{children}</span>
      </span>
    </button>
  );
};

export const WobbleButton = ({ children, className, onClick }: WobbleButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 1.7);
      const middleY = clientY - (top + height / 1.7);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn('cursor-pointer', className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export const EspecularButton = ({ children, className, ...props }: EspecularButtonProps): JSX.Element => {
  return (
    <button className={cn(styles['especular-btn'], className)} {...props}>
      <span>
        {children}
      </span>
    </button>
  )
}
