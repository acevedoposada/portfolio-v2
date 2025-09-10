"use client";

import { LegacyRef, useCallback, useRef } from "react";
import { useInView as useInViewLibrary, IntersectionOptions } from "react-intersection-observer";

type UseInViewHook = [(node: HTMLElement | null) => void, boolean, HTMLElement];

export const useInView = (options?: IntersectionOptions): UseInViewHook => {
  const elementRef = useRef<LegacyRef<HTMLElement> | undefined>(null);
  const [inViewRef, inView] = useInViewLibrary(options);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      elementRef.current = node as unknown as LegacyRef<HTMLElement>;
      inViewRef(node);
    },
    [inViewRef]
  );

  return [ref, inView, elementRef.current as unknown as HTMLElement];
};
