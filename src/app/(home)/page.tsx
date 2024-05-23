"use client";

import {
  IconHome,
  IconSparkles,
  IconBriefcase,
  IconHandClick,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

import { DotsBackground, Footer, Title } from "@/components";
import { useInView } from "@/utils/inView";

import { NavItem } from "./components/floating-navbar/floating-navbar.entity";
import {
  Hero,
  FloatingNavbar,
  SkillsSection,
  ExperienceSection,
} from "./components";
import styles from "./styles.module.scss";

export default function Page() {
  const innerHeight = typeof window !== "undefined" && window.innerHeight;

  const [skillsRef, skillsInView, skillsElement] = useInView({
    threshold: 0.5,
  });
  const [experienceRef, experienceInView, experienceElement] = useInView({
    threshold: 0.5,
  });
  const [contactRef, contactInView, contactElement] = useInView({
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
        title: "Skills",
        isActive: skillsInView,
        element: skillsElement,
        icon: <IconSparkles />,
      },
      {
        title: "Experience",
        isActive: experienceInView,
        element: experienceElement,
        icon: <IconBriefcase />,
      },
      {
        title: "Contact",
        isActive: contactInView,
        element: contactElement,
        icon: <IconHandClick />,
      },
    ];
  }, [
    skillsElement,
    skillsInView,
    experienceElement,
    experienceInView,
    contactInView,
    contactElement,
  ]);

  return (
    <main>
      <header className={styles.home__header}>
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
          <SkillsSection />
        </div>
      </section>
      <section ref={experienceRef} className={styles.home__experience}>
        <DotsBackground className="absolute top-0" speed={{ left: 50 }} />
        <div className={styles.home__experience__content}>
          <ExperienceSection />
        </div>
      </section>
      <Footer ref={contactRef} />
      <FloatingNavbar navItems={navLinks} />
    </main>
  );
}
