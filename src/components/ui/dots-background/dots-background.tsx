"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { useParallax } from "@/utils/parallax";
import { cn } from "@/utils/cn";

import styles from "./dots-background.module.scss";

interface DotsBackgroundProps extends React.HTMLProps<HTMLDivElement> {}

export default function DotsBackground({
  className,
  ...props
}: DotsBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y1 = useParallax(scrollYProgress, 150);
  const y2 = useParallax(scrollYProgress, 500);

  return (
    <div ref={ref} className={cn(styles.bg, className)} {...props}>
      <motion.div
        className={cn(styles["bg__dots"], styles["bg__dots1"])}
        style={{ y: y1 }}
      />
      <motion.div
        className={cn(styles["bg__dots"], styles["bg__dots2"])}
        style={{ y: y2 }}
      />
    </div>
  );
}
