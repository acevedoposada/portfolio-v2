import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type BaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type AvatarProps =
  | (BaseProps & {
    src: string;
    alt: string;
    children?: never;
  })
  | (BaseProps & {
    src?: undefined;
    alt?: undefined;
    children: ReactNode;
  })

export interface AvatarPropss
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children?: ReactNode;
  src?: string;
}