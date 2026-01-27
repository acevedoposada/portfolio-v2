"use client";

import {
  IconSparkles,
  IconBriefcase,
  IconHandClick,
  IconMapPin,
  IconScript,
  IconBlockquote,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

import { DotsBackground, Footer, Title, WeatherText } from "@/components";
import { useInView } from "@/utils/inView";

import {
  Hero,
  FloatingNavbar,
  SkillsSection,
  ExperienceSection,
  ScrollTitle,
  ResumeSection,
} from "./components";
import { NavItem } from "./components/floating-navbar/floating-navbar.entity";
import styles from "./styles.module.scss";
import LogoLoop from "@/components/ui/logo-loop";

export default function Home() {
  const innerHeight = typeof window !== "undefined" && window.innerHeight;

  const [skillsRef, skillsInView, skillsElement] = useInView({
    threshold: 0.5,
  });
  const [experienceRef, experienceInView, experienceElement] = useInView({
    threshold: 0.5,
  });
  const [resumeRef, resumeInView, resumeElement] = useInView({
    threshold: 0.5,
  });
  const [contactRef, contactInView, contactElement] = useInView({
    threshold: 0.5,
  });

  const { scrollY } = useScroll();
  const boxY = useTransform(scrollY, [0, innerHeight as number], [0, innerHeight as number]);

  const navLinks = useMemo<NavItem[]>(() => {
    const isBlogEnabled = process.env.ENABLE_BLOG_PAGE === "true";
    return [
      {
        id: "exp",
        title: "Experience",
        isActive: experienceInView,
        element: experienceElement,
        icon: <IconBriefcase />,
      },
      {
        id: "skills",
        title: "Skills",
        isActive: skillsInView,
        element: skillsElement,
        icon: <IconSparkles />,
      },
      {
        id: "resume",
        title: "Resume",
        isActive: resumeInView,
        element: resumeElement,
        icon: <IconScript />,
      },
      {
        id: "contact",
        title: "Contact",
        isActive: contactInView,
        element: contactElement,
        icon: <IconHandClick />,
      },
      ...(isBlogEnabled
        ? [
            {
              id: "blog",
              title: "Blog",
              isActive: false,
              link: "/my/blog",
              icon: <IconBlockquote />,
            },
          ]
        : []),
    ];
  }, [
    skillsElement,
    skillsInView,
    experienceElement,
    experienceInView,
    contactInView,
    contactElement,
    resumeInView,
    resumeElement,
  ]);

  return (
    <main className="relative overflow-x-hidden">
      <header className={styles.home__header}>
        <nav className="pointer-events-none absolute left-0 top-0 z-20 flex w-full justify-end px-8 pt-8 md:px-10 md:pt-10 lg:px-16 lg:pt-16 2xl:px-32 2xl:pt-32">
          <div className="flex items-center gap-2 font-light uppercase text-white md:gap-6">
            <WeatherText className="text-xs md:text-sm" />
            <div className="hidden items-center gap-1 rounded-full border-[0.5px] border-white py-1.5 pl-2 pr-2 text-xs md:flex">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              open to work
            </div>
            <IconMapPin className="block h-4 w-4 md:hidden" />
          </div>
        </nav>
        <motion.section className="left-0 w-full lg:absolute" style={{ top: boxY }}>
          <Hero />
        </motion.section>
      </header>
      <section className={styles.home__experience}>
        <DotsBackground className="absolute top-0" speed={{ left: 50 }} />
        <div ref={experienceRef} className={styles.home__experience__content}>
          <ExperienceSection />
        </div>
      </section>
      <section className="mx-auto w-full overflow-hidden px-10 py-10 md:w-11/12 md:pb-16 md:pt-0 lg:px-6">
        <h4 className="mb-6 py-3 text-lg font-thin text-zinc-400 opacity-65 lg:text-2xl">
          <span className="font-lora text-white">Companies</span> and{" "}
          <span className="font-lora text-white">brands</span> I have collaborated with
        </h4>
        <LogoLoop
          logos={[
            { src: "/static/images/adl.png", alt: "ADL", href: "https://www.adldigitallab.com/" },
            {
              src: "/static/images/banco-de-bogota.png",
              alt: "Banco de Bogotá",
              href: "https://www.bancodebogota.com",
            },
            {
              src: "/static/images/grupo-aval.png",
              alt: "Grupo Aval",
              href: "https://www.grupoaval.com/home",
            },
            {
              src: "/static/images/abinbev.png",
              alt: "ABInBev",
              href: "https://www.ab-inbev.com/",
            },
            { src: "/static/images/bavaria.png", alt: "Bavaria", href: "https://www.bavaria.co/" },
            {
              src: "/static/images/becks.png",
              alt: "Becks Beer",
              href: "https://becks.de/?lang=en",
            },
            {
              src: "/static/images/noffra.png",
              alt: "Noffra",
              href: "https://empresasnoffra.com/",
            },
            {
              src: "/static/images/serempre.png",
              alt: "Serempre",
              href: "https://www.linkedin.com/company/serempre/",
            },
            {
              src: "/static/images/tienda-cerca.png",
              alt: "Tienda Cerca",
              href: "https://tiendacerca.com/",
            },
            { src: "/static/images/menu-digital.png", alt: "Menú Digital", href: "#" },
          ]}
          logoHeight={120}
          gap={60}
          hoverSpeed={50}
          speed={40}
          scaleOnHover
          fadeOut
          fadeOutColor="#0B0B0F"
        />
      </section>
      <section ref={skillsRef} className={styles.home__skillset}>
        <DotsBackground className="absolute top-0" />
        <div className={styles.home__skillset__content}>
          <Title firstLine="My" secondLine="Skillset" />
          <SkillsSection />
        </div>
      </section>
      <ScrollTitle />
      <section ref={resumeRef} className={styles.home__resume}>
        <ResumeSection />
      </section>
      <Footer ref={contactRef} navLinks={navLinks} />
      <FloatingNavbar navItems={navLinks} />
    </main>
  );
}
