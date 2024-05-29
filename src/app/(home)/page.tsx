"use client";

import {
  IconSparkles,
  IconBriefcase,
  IconHandClick,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

import {
  DotsBackground,
  Footer,
  InfiniteSlider,
  Title,
  WeatherText,
} from "@/components";
import { useInView } from "@/utils/inView";

import {
  Hero,
  FloatingNavbar,
  SkillsSection,
  ExperienceSection,
} from "./components";
import { NavItem } from "./components/floating-navbar/floating-navbar.entity";
import styles from "./styles.module.scss";

export default function Home() {
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
        title: "Experience",
        isActive: experienceInView,
        element: experienceElement,
        icon: <IconBriefcase />,
      },
      {
        title: "Skills",
        isActive: skillsInView,
        element: skillsElement,
        icon: <IconSparkles />,
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
    <main className="relative">
      <header className={styles.home__header}>
        <nav className="pointer-events-none absolute left-0 top-0 z-20 flex w-full justify-end px-32 pt-32">
          <div className="flex items-center gap-6 font-light uppercase text-white">
            <WeatherText className="text-sm" />
            <div className="flex items-center gap-1 rounded-full border-[0.5px] border-white py-1.5 pl-2 pr-2 text-xs">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              open to work
            </div>
          </div>
        </nav>
        <motion.section
          className="left-0 w-full lg:absolute"
          style={{ top: boxY }}
        >
          <Hero />
        </motion.section>
      </header>
      <section ref={experienceRef} className={styles.home__experience}>
        <DotsBackground className="absolute top-0" speed={{ left: 50 }} />
        <div className={styles.home__experience__content}>
          <ExperienceSection />
        </div>
      </section>
      <section className="mx-auto w-full overflow-hidden py-10 md:w-10/12 md:py-0">
        <InfiniteSlider
          items={[
            "accessibility",
            "responsiveness",
            "interactive",
            "performance",
          ]}
        />
      </section>
      <section ref={skillsRef} className={styles.home__skillset}>
        <DotsBackground className="absolute top-0" />
        <div className={styles.home__skillset__content}>
          <Title firstLine="My" secondLine="Skillset" />
          <SkillsSection />
        </div>
      </section>
      <Footer ref={contactRef} />
      <FloatingNavbar navItems={navLinks} />
    </main>
  );
}
