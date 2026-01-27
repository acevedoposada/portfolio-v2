"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { useParallax } from "@/utils/parallax";
import { cn } from "@/utils/cn";

import styles from "./dots-background.module.scss";

interface DotsBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  speed?: {
    left?: number;
    right?: number;
  };
  hiddenDots?: "left" | "right";
}

export default function DotsBackground({
  className,
  speed = { left: 150, right: 500 },
  hiddenDots,
  ...props
}: DotsBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y1 = useParallax(scrollYProgress, speed.left ?? 150);
  const y2 = useParallax(scrollYProgress, speed.right ?? 500);

  return (
    <div ref={ref} className={cn(styles.bg, className)} {...props}>
      {(hiddenDots !== "left" || hiddenDots === undefined) && (
        <motion.div className={cn(styles["bg__dots"], styles["bg__dots1"])} style={{ y: y1 }} />
      )}
      {(hiddenDots !== "right" || hiddenDots === undefined) && (
        <motion.div className={cn(styles["bg__dots"], styles["bg__dots2"])} style={{ y: y2 }} />
      )}
    </div>
  );
}
