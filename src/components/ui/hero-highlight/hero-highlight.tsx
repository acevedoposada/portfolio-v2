"use client";

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
  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center bg-black",
        containerClassName
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}
