import { HTMLMotionProps } from "framer-motion";

export interface NavItem {
  id?: string;
  title: string;
  isActive: boolean;
  element?: HTMLElement;
  icon?: JSX.Element;
}

export interface FloatingNavbarProps extends HTMLMotionProps<"nav"> {
  navItems: Array<NavItem>;
}

export interface NavButtonProps {
  isActive?: boolean;
  element?: HTMLElement;
  children: React.ReactNode;
  icon?: JSX.Element;
  link?: string;
}
