import Image from "next/image";

import { PixelCard } from "@/components/ui/pixel-card";
import { skills } from "@/constants/skills";
import { cn } from "@/utils/cn";

import styles from "./skills-section.module.scss";
import { rgbToHex } from "@/utils/colors";

export default function SkillsSection() {
  const getColors = (colors: number[][]): string =>
    colors.map(([r, g, b]) => rgbToHex(r, g, b)).join(',')

  return (
    <section className="relative flex h-full flex-1 items-start justify-center pt-24">
      <div className={styles.skills}>
        {skills.map((skill, idx) => (
          <a key={idx} href={skill.link} target="_blank">
            <PixelCard className="group mx-auto" colors={getColors(skill.colors)}>
              <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full grid items-end pb-6 md:pb-8 -translate-y-7 group-hover:translate-y-0 transition-all duration-300">
                <h3
                  className="text-lg md:text-4xl xl:text-3xl text-center text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:0.5px] leading-none group-hover/canvas-card:text-transparent bg-gradient-to-tr from-white to-transparent bg-clip-text pb-1"
                >
                  {skill.title}
                </h3>
              </div>
              <div className="group-hover:-translate-y-4 md:group-hover:-translate-y-6 absolute top-0 left-0 w-full h-full grid place-content-center transition-transform duration-300">
                <div className="relative z-20 mx-auto flex h-10/12 w-10/12 2xl:w-full 2xl:h-full items-center justify-center text-center transition duration-200">
                  <Image
                    className="relative z-20"
                    src={skill.image}
                    alt={`${skill.title} logo`}
                    width={140}
                    height={140}
                  />
                  <Image
                    className={cn("absolute z-10 h-full w-full opacity-40 blur-lg [&>img]:mx-auto [&>img]:h-full [&>img]:w-8/12 [&>img]:object-contain", skill.classes?.overlay)}
                    src={skill.image}
                    alt={`${skill.title} logo overlay`}
                    width={140}
                    height={140}
                  />
                </div>
              </div>
            </PixelCard>
          </a>
        ))}
      </div>
    </section>
  );
}
