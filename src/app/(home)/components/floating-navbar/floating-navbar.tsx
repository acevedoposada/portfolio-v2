"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

import { cn } from "@/utils/cn";

import { NavButtonProps, FloatingNavbarProps } from "./floating-navbar.entity";
import styles from "./floating-navbar.module.scss";

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
    : ({ ...props }) => <button {...props} />;

  return (
    <Component
      className={cn("group", styles.fn__btn, isActive && styles["fn__btn--active"])}
      onClick={handleClick}
    >
      {link && (
        <span className={cn(styles.fn__btn__link, "group-hover:scale-100")}>
          <IconArrowUpRight size={16} />
        </span>
      )}
      <span
        className={cn(
          "group-hover:opacity-100",
          styles.fn__btn__icon,
          isActive && styles["fn__btn__icon--active"]
        )}
      >
        {icon}
      </span>
      <span className={styles.fn__btn__label}>{children}</span>
      <span
        className={cn(
          "group-hover:w-2/3",
          styles.fn__btn__indicator,
          isActive && styles["fn__btn__indicator--active"]
        )}
      />
    </Component>
  );
}

export default function FloatingNavbar({ className, navItems, ...props }: FloatingNavbarProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        {...props}
        initial={{ opacity: 1, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(styles.fn, className)}
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
