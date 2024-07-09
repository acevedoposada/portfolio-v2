import { CanvasRevealEffect, Card } from "@/components";
import { cn } from "@/utils/cn";
import Image from "next/image";

import styles from "./skills-section.module.scss";

const skills = [
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "ReactJS",
    colors: [
      [4, 217, 251],
      [156, 247, 251],
    ],
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
    title: "NextJS",
    colors: [
      [240, 240, 240],
      [255, 255, 255],
    ],
    classes: {
      overlay: "invert",
    },
  },
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
    title: "Angular",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    title: "TailwindCSS",
    colors: [[52, 188, 251]],
  },
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-firebase-11796860-9632965.png",
    title: "Firebase",
    colors: [
      [245, 133, 11],
      [251, 203, 61],
    ],
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
    title: "Strapi",
    colors: [
      [140, 116, 252],
      [164, 147, 252],
    ],
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/lit-1.svg",
    title: "LitElement",
    colors: [
      [52, 76, 252],
      [4, 241, 252],
    ],
  },
  {
    image:
      "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    title: "Framer Motion",
    colors: [
      [188, 76, 148],
      [91, 83, 156],
    ],
    classes: {
      title: "lg:-mt-10",
    },
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    title: "Typescript",
    colors: [[51, 123, 196]],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative flex h-full flex-1 flex-col pt-24">
      <div className={styles.skills}>
        {skills.map((skill, idx) => (
          <Card
            key={idx}
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
                "-mt-4 text-xl xl:text-3xl 2xl:text-4xl text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:0.5px] leading-none group-hover/canvas-card:text-transparent bg-gradient-to-tr from-white to-transparent bg-clip-text text-transparent pb-1",
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
        ))}
      </div>
    </section>
  );
}
