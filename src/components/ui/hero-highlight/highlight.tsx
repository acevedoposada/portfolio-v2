"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

interface HighlightProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Highlight({ children, className, delay }: HighlightProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration: 2,
        ease: "circOut",
        delay: delay || 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-1 pb-1",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
