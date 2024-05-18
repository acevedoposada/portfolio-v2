import TextTransition, { presets } from "react-text-transition";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { InfiniteMovingCardItem } from "../infinite-moving-cards";
import { InfiniteMovingCards } from "../infinite-moving-cards";

const skills = [
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "ReactJS",
    description: "",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
    title: "NextJS",
    description: "",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    title: "TailwindCSS",
    description: "",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    title: "Typescript",
    description: "",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
    title: "Strapi",
    description: "",
  },
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
    title: "Angular",
    description: "",
  },
];

export default function SkillsSection() {
  const [hoveredEl, setHoveredEl] = useState<InfiniteMovingCardItem | null>({
    image: "",
    title: "Skills",
    description: "",
  });

  const handleHoverElement = (item: InfiniteMovingCardItem | null) => {
    setHoveredEl(item);
  };

  return (
    <section className="relative mx-auto flex h-full w-[80vw] flex-1 flex-col justify-center">
      <InfiniteMovingCards
        speed="slow"
        items={skills}
        onHoverElement={handleHoverElement}
        onLeaveElement={handleHoverElement}
      />
      <div className="pointer-events-none z-20 h-3 w-full select-none relative">
        <AnimatePresence>
          {hoveredEl && (
            <motion.span
              className="absolute w-full flex h-3 justify-center text-center text-[6rem] font-extrabold leading-3 text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:1px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              {hoveredEl?.title}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <InfiniteMovingCards
        className="relative z-10"
        speed="slow"
        direction="right"
        items={skills}
        onHoverElement={handleHoverElement}
        onLeaveElement={handleHoverElement}
      />
    </section>
  );
}
