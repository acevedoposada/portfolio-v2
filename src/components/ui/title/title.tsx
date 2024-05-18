"use client";

import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TitleProps {
  firstLine?: string;
  secondLine?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
  },
};

export default function Title({ firstLine, secondLine }: TitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <h1 ref={ref} className="text-4xl font-light md:text-6xl">
      {firstLine && (
        <motion.span
          className="flex overflow-y-hidden"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          {firstLine.split("").map((letter, idx) => (
            <motion.span
              key={idx}
              className="mb-2 block opacity-50"
              variants={itemVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      )}
      {secondLine && (
        <motion.span
          className="flex overflow-y-hidden"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          {secondLine.split("").map((letter, idx) => (
            <motion.span key={idx} className="block" variants={itemVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.span>
      )}
    </h1>
  );
}
