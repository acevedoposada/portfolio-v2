import { DetailedHTMLProps, HTMLAttributes, Ref } from "react";

export enum CardVariant {
  post = "post",
  featured = "featured",
}

interface Avatar {
  img?: string;
  name: string;
}

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  image: string;
  title: string;
  description: string;
  avatar: Avatar;
  date: string | Date;
  tags?: Array<string>;
  readTime?: number;
}

export interface BlogCardProps extends CardProps {
  variant?: `${CardVariant}`;
}
