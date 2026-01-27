import { ReactNode } from "react";
import { PIXEL_CARD_VARIANTS } from "./pixel-card.constants";

export interface PixelCardProps {
  variant?: keyof typeof PIXEL_CARD_VARIANTS;
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children: ReactNode;
}

export interface VariantConfig {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
}
