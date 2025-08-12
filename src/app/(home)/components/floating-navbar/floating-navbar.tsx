"use client";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/utils/cn";

import { NavButtonProps, FloatingNavbarProps } from "./floating-navbar.entity";
import Link from "next/link";

function NavButton({ isActive, children, element, icon, link }: NavButtonProps) {
  function handleClick() {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  const Component = link
    ? ({ ...props }) => <Link href={link} {...props} />
    : ({ ...props }) => <button {...props} />

  return (
    <Component
      className={cn(
        "group relative flex items-center justify-center gap-1 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-white transition-all w-full md:w-auto",
        isActive && "border-white/[0.2]",
      )}
      onClick={handleClick}
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center opacity-60 transition-all [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-4 md:[&>svg]:w-4 [&>svg]:transition-all",
          isActive && "opacity-100 [&>svg]:h-6 [&>svg]:w-6 md:[&>svg]:h-5 md:[&>svg]:w-5",
        )}
      >
        {icon}
      </span>
      <span className="inset-0 hidden overflow-x-hidden text-sm sm:block">
        {children}
      </span>
      <span
        className={cn(
          "absolute inset-x-0 -bottom-px mx-auto h-px w-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent transition-all group-hover:w-2/3",
          isActive &&
          "w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent",
        )}
      />
    </Component>
  );
}

export default function FloatingNavbar({
  className,
  navItems,
  ...props
}: FloatingNavbarProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        {...props}
        initial={{ opacity: 1, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 bottom-5 md:bottom-10 z-[5000] mx-auto flex md:max-w-fit w-[calc(100%_-_4rem)] items-center justify-between md:space-x-2 rounded-full border border-white/[0.2] bg-black px-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
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
