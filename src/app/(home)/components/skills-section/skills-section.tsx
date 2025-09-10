import Image from "next/image";

import { PixelCard } from "@/components/ui/pixel-card";
import { skills } from "@/constants/skills";
import { cn } from "@/utils/cn";

import styles from "./skills-section.module.scss";
import { rgbToHex } from "@/utils/colors";

export default function SkillsSection() {
  const getColors = (colors: number[][]): string =>
    colors.map(([r, g, b]) => rgbToHex(r, g, b)).join(",");

  return (
    <section className="relative flex h-full flex-1 items-start justify-center pt-24">
      <div className={styles.skills}>
        {skills.map((skill, idx) => (
          <a key={idx} href={skill.link} target="_blank">
            <PixelCard className="group mx-auto" colors={getColors(skill.colors)}>
              <div className="absolute left-0 top-0 grid h-full w-full -translate-y-7 items-end pb-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:pb-8">
                <h3 className="bg-gradient-to-tr from-white to-transparent bg-clip-text pb-1 text-center text-lg leading-none text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:0.5px] group-hover/canvas-card:text-transparent md:text-3xl lg:text-2xl 2xl:text-4xl">
                  {skill.title}
                </h3>
              </div>
              <div className="absolute left-0 top-0 grid h-full w-full place-content-center transition-transform duration-300 group-hover:-translate-y-4 md:group-hover:-translate-y-6">
                <div className="h-6/12 md:h-9/12 relative z-20 mx-auto flex w-6/12 items-center justify-center text-center transition duration-200 md:w-9/12 2xl:h-full 2xl:w-full">
                  <Image
                    className="relative z-20"
                    src={skill.image}
                    alt={`${skill.title} logo`}
                    width={140}
                    height={140}
                  />
                  <Image
                    className={cn(
                      "absolute z-10 h-full w-full opacity-40 blur-lg [&>img]:mx-auto [&>img]:h-full [&>img]:w-8/12 [&>img]:object-contain",
                      skill.classes?.overlay
                    )}
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
