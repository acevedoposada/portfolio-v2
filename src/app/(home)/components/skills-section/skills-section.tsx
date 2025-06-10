import Image from "next/image";

import { CanvasRevealEffect, Card } from "@/components";
import { cn } from "@/utils/cn";
import { skills } from "@/constants/skills";

import styles from "./skills-section.module.scss";

export default function SkillsSection() {
  return (
    <section className="relative flex h-full flex-1 items-start justify-center pt-24">
      <div className={styles.skills}>
        {skills.map((skill, idx) => (
          <a key={idx} href={skill.link} target="_blank">
            <Card
              className="mx-auto aspect-square"
              title={skill.title}
              icon={
                <Image
                  src={skill.image}
                  alt={`${skill.title} logo`}
                  width={140}
                  height={140}
                />
              }
              classes={{
                title: cn(
                  "-mt-4 text-xl xl:text-3xl text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:0.5px] leading-none group-hover/canvas-card:text-transparent bg-gradient-to-tr from-white to-transparent bg-clip-text text-transparent pb-1",
                  skill.classes?.title,
                ),
                overlay: skill.classes?.overlay,
              }}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={skill.colors}
                dotSize={2}
              />
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
