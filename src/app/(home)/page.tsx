"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IconHome, IconStar } from "@tabler/icons-react";
import { useMemo } from "react";

import { DotsBackground, Title } from "@/components";
import { useInView } from "@/utils/inView";

import { NavItem } from "./components/floating-navbar/floating-navbar.entity";
import { Hero, FloatingNavbar } from "./components";
import styles from "./styles.module.scss";

export default function Page() {
  const innerHeight = typeof window !== "undefined" && window.innerHeight;

  const [headerRef, headerInView, headerElement] = useInView({
    threshold: 0.5,
  });
  const [skillsRef, skillsInView, skillsElement] = useInView({
    threshold: 0.5,
  });

  const { scrollY } = useScroll();
  const boxY = useTransform(
    scrollY,
    [0, innerHeight as number],
    [0, innerHeight as number],
  );

  const navLinks = useMemo<NavItem[]>(() => {
    return [
      {
        title: "Home",
        isActive: headerInView,
        element: headerElement,
        icon: <IconHome />,
      },
      {
        title: "Skills",
        isActive: skillsInView,
        element: skillsElement,
        icon: <IconStar />,
      },
    ];
  }, [headerElement, headerInView, skillsElement, skillsInView]);

  return (
    <main>
      <header ref={headerRef} className={styles.home__header}>
        <motion.section
          className="left-0 w-full lg:absolute"
          style={{ top: boxY }}
        >
          <Hero />
        </motion.section>
      </header>
      <section ref={skillsRef} className={styles.home__skillset}>
        <DotsBackground className="absolute top-0" />
        <div className={styles.home__skillset__content}>
          <Title firstLine="My" secondLine="Skillset" />
        </div>
      </section>
      <FloatingNavbar navItems={navLinks} />
    </main>
  );
}
