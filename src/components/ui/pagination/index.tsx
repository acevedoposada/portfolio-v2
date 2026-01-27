"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { MouseEvent, useMemo } from "react";

import { PAGE_SIZE } from "@/constants/blog";
import { cn } from "@/utils/cn";

import { PaginationProps, PaginationVariants } from "./pagination.model";
import { DOTS_SPAN, usePagination } from "./pagination.hook";
import styles from "./pagination.module.scss";

enum DirectionButton {
  PREV = "prev",
  NEXT = "next",
}

function Pagination({
  currentPage,
  totalPages,
  showPageInfo,
  hideBullets,
  hideArrows,
  hideButtonLabel,
  variant = PaginationVariants.DEFAULT,
  onPageChange,
}: PaginationProps) {
  const { pages } = usePagination({ currentPage, totalPages });

  const handleBulletClick = (page: number) => (event: MouseEvent<Element>) => {
    if (typeof page === "number") {
      onPageChange?.(page, event);
    }
  };

  const handleArrowClick =
    (direction: DirectionButton) => (event: MouseEvent<HTMLButtonElement>) => {
      onPageChange?.(currentPage + (direction === DirectionButton.NEXT ? 1 : -1), event);
    };

  const variantStyles = useMemo(() => {
    const variantStylesMapper: Record<PaginationVariants, Record<string, boolean>> = {
      [PaginationVariants.DEFAULT]: {},
      [PaginationVariants.OUTLINED]: {
        [styles["pagination__control--outlined"]]: true,
      },
      [PaginationVariants.TONAL]: {
        [styles["pagination__control--tonal"]]: true,
      },
    };

    return variantStylesMapper[variant];
  }, [variant]);

  const buttonsArrowClassNames = {
    [styles["pagination__control--bullets-hidden"]]: hideBullets,
    [styles["pagination__control--label-hidden"]]: hideButtonLabel,
    ...variantStyles,
  };

  return (
    <nav className={styles.pagination}>
      {!(hideArrows && !hideBullets) && (
        <button
          className={cn(
            styles.pagination__control,
            styles.pagination__control__prev,
            buttonsArrowClassNames
          )}
          onClick={handleArrowClick(DirectionButton.PREV)}
          disabled={currentPage === 1}
        >
          <IconChevronLeft />
          {!hideButtonLabel && <span>Previous</span>}
        </button>
      )}
      {!(hideBullets && !hideArrows) &&
        pages.map((page, index) => (
          <button
            key={`${page}-${index}`}
            onClick={handleBulletClick(page as number)}
            className={cn(
              styles.pagination__control,
              styles.pagination__control__bullet,
              page !== DOTS_SPAN && variantStyles,
              {
                [styles["pagination__control--active"]]: page === currentPage,
              }
            )}
          >
            {page}
          </button>
        ))}
      {!(hideArrows && !hideBullets) && (
        <button
          className={cn(
            styles.pagination__control,
            styles.pagination__control__next,
            buttonsArrowClassNames
          )}
          onClick={handleArrowClick(DirectionButton.NEXT)}
          disabled={currentPage === totalPages}
        >
          {!hideButtonLabel && <span>Next</span>}
          <IconChevronRight />
        </button>
      )}
      {showPageInfo && (
        <div className={styles.pagination__info}>
          <p>
            Showing {PAGE_SIZE} of {totalPages} results
          </p>
        </div>
      )}
    </nav>
  );
}

export default Pagination;
