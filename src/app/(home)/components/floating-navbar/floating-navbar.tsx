"use client";

import { useState } from "react";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";

import { cn } from "@/utils/cn";

import { NavButtonProps, FloatingNavbarProps } from "./floating-navbar.entity";

function NavButton({ isActive, children, element, icon }: NavButtonProps) {
  function handleClick() {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }

  return (
    <button
      className={cn(
        "group relative rounded-full border border-transparent px-4 py-2 text-sm font-medium text-white transition-all",
        isActive && "border-white/[0.2]",
      )}
      onClick={handleClick}
    >
      <span
        className={cn(
          "block opacity-60 transition-all sm:hidden",
          isActive && "opacity-100",
        )}
      >
        {icon}
      </span>
      <span className="hidden text-sm sm:block">{children}</span>
      <span
        className={cn(
          "absolute inset-x-0 -bottom-px mx-auto h-px w-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent transition-all group-hover:w-2/3",
          isActive &&
            "w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent",
        )}
      />
    </button>
  );
}

export default function FloatingNavbar({
  className,
  navItems,
  ...props
}: FloatingNavbarProps) {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 805px)").matches;

  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current > 200 || (isMobile && current > 50)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        {...props}
        initial={{ opacity: 1, y: 100 }}
        animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 bottom-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white/[0.2] bg-black px-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className,
        )}
      >
        {navItems.map((item, idx) => (
          <NavButton key={idx} {...item}>
            {item.title}
          </NavButton>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
}
