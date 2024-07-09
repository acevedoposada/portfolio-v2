import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  Variants,
} from "framer-motion";
import { useMemo, useRef } from "react";

import { useInView } from "@/utils/inView";

import styles from "./scroll-title.module.scss";
import { DotsBackground } from "@/components";

export default function ScrollTitle() {
  const ref = useRef(null);

  const isMobile = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1022px)").matches,
    [],
  );

  const [leftRef, leftInView] = useInView({ threshold: 1 });
  const [rightRef, rightInView] = useInView({ threshold: 1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
    axis: "y",
  });

  const creativeX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-50%", "-200%"] : ["-400%", "-1000%"],
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const developerX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["50%", "200%"] : ["400%", "1000%"],
  );
  const frontendScale = useTransform(scrollYProgress, [1, 0.5], [0, 1]);

  const springOpts = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };

  const creativeSpring = useSpring(creativeX, springOpts);
  const developerSpring = useSpring(developerX, springOpts);

  const paragraphVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <section ref={ref} className={styles["scroll-title"]}>
      <DotsBackground hiddenDots="left" />
      <motion.p
        ref={leftRef as React.LegacyRef<HTMLParagraphElement>}
        animate={leftInView ? "show" : "hidden"}
        initial="hidden"
        variants={paragraphVariants}
      >
        I&apos;ve worked in front-end development, so I can understand designs
        well and builds effective communication between team members.
      </motion.p>
      <motion.h2 className={styles["scroll-title__title"]}>
        <motion.span style={{ x: creativeSpring, opacity: textOpacity }}>
          Creative
        </motion.span>
        <motion.span
          style={{ scale: frontendScale }}
          transition={{ type: "tween" }}
        >
          Frontend
        </motion.span>
        <motion.span style={{ x: developerSpring, opacity: textOpacity }}>
          Developer
        </motion.span>
      </motion.h2>
      <motion.p
        className="ml-auto"
        ref={rightRef as React.LegacyRef<HTMLParagraphElement>}
        animate={rightInView ? "show" : "hidden"}
        initial="hidden"
        variants={paragraphVariants}
      >
        Currently, I live in Medellin, Colombia. In my personal life, I love to
        travel with my backpack, watch documentaries about nature, and love
        techno music.
      </motion.p>
      <div className={styles["scroll-title__blobs"]} />
    </section>
  );
}
