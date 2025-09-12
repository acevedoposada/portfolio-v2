import { MouseEvent } from "react";

export enum PaginationVariants {
  DEFAULT = "default",
  OUTLINED = "outlined",
  TONAL = "tonal",
}

export interface PaginationProps {
  variant?: `${PaginationVariants}`;
  currentPage: number;
  totalPages: number;
  showPageInfo?: boolean;
  hideBullets?: boolean;
  hideArrows?: boolean;
  hideButtonLabel?: boolean;
  onPageChange?: (page: number, event?: MouseEvent) => void;
}
