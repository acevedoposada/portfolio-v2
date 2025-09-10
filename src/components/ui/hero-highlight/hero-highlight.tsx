"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

import { cn } from "@/utils/cn";

interface HeroHighlightProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function HeroHighlight({
  children,
  className,
  containerClassName,
}: HeroHighlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;

    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center bg-black",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-800">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 bg-dot-thick-indigo-500 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}
