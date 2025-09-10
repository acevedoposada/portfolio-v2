"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

export interface InfiniteMovingCardItem {
  image: string;
  description: string;
  title: string;
}

export interface InfiniteMovingCardsProps {
  items: InfiniteMovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  onHoverElement?: (item: InfiniteMovingCardItem) => void;
  onLeaveElement?: (item: null) => void;
}

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  onHoverElement,
  onLeaveElement,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children) as Array<HTMLLIElement>;

      scrollerContent.forEach((item: HTMLLIElement) => {
        const elementId = item.dataset!.element as unknown as number;
        const duplicatedItem = item.cloneNode(true) as HTMLLIElement;
        if (onHoverElement) {
          item.onmouseenter = () => onHoverElement(items[elementId]);
          duplicatedItem.onmouseenter = () => onHoverElement(items[elementId]);
        }
        if (onLeaveElement) {
          item.onmouseleave = () => onLeaveElement(null);
          duplicatedItem.onmouseleave = () => onLeaveElement(null);
        }
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller max-w-screen relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${Math.random().toString(16)}_${item.title.replace(" ", "_")}`}
            className="relative h-[150px] w-[150px] flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:h-[250px] md:w-[250px]"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            data-element={idx}
          >
            <section className="flex h-full w-full items-center justify-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <Image src={item.image} alt={item.title} width={200} height={200} />
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
