"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "react-lottie";

import scrollAnimation from "@/components/animations/scroll-animation.json";
import { AuroraBackground, HeroHighlight, Highlight } from "@/components";
import { cn } from "@/utils/cn";

import styles from "./hero.module.scss";
import { useMemo } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const isMobile = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches,
    [],
  );

  const transformText = useTransform(
    scrollYProgress,
    [0, 1],
    [1, !isMobile ? 0.5 : 0.1],
  );

  return (
    <div className={styles.hero}>
      <AuroraBackground className="pointer-events-none z-30 bg-transparent opacity-40" />
      <HeroHighlight containerClassName="h-dvh absolute top-0 left-0">
        <motion.div style={{ scale: transformText }}>
          <motion.h1 className={styles.hero__title}>
            <span
              className={cn(
                "text-5xl md:text-6xl lg:text-[6rem]",
                styles.hero__title__section,
              )}
            >
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
              >
                I&apos;m
              </motion.span>{" "}
              <motion.span
                className={cn("inline-block", styles.hero__title__highlight)}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                David
              </motion.span>
            </span>
            <span className={cn("lg:-mb-6", styles.hero__title__section)}>
              <Highlight>
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Creative
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Frontend
                </motion.span>
              </Highlight>
            </span>
            <span className={styles.hero__title__section}>
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Developer.
              </motion.span>
            </span>
          </motion.h1>
          <motion.p
            className={styles.hero__description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            I develop accessible, responsive, interactive, and animated websites
            and applications with a strong focus on performance.
          </motion.p>
        </motion.div>
      </HeroHighlight>
    </div>
  );
}
