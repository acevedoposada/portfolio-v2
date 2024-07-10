import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, HTMLAttributes, useState } from "react";

export const Card = ({
  title,
  icon,
  children,
  className,
  classes,
  style,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  classes?: {
    icon?: string;
    title?: string;
    overlay?: string;
    shadow?: string;
  };
  style?: CSSProperties;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group/canvas-card relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.01] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] backdrop-blur-md",
        className,
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 h-full">
        <div
          className={cn(
            "relative z-20 mx-auto flex h-full w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0",
            classes?.icon,
          )}
        >
          <span className="relative z-20 flex h-full [&>img]:mx-auto [&>img]:h-full [&>img]:w-8/12 [&>img]:object-contain">
            {icon}
          </span>
          <span
            className={cn(
              "absolute z-10 h-full w-full opacity-40 blur-lg [&>img]:mx-auto [&>img]:h-full [&>img]:w-8/12 [&>img]:object-contain",
              classes?.overlay,
            )}
          >
            {icon}
          </span>
          <span
            className={cn(
              "absolute z-[15] h-1/3 w-1/3 rounded-full bg-black opacity-25 blur-xl",
              classes?.shadow,
            )}
          />
        </div>
        <h2
          className={cn(
            "absolute left-1/2 top-1/2 z-10 mt-4 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white",
            classes?.title,
          )}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};
