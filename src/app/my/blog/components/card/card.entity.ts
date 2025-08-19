import { DetailedHTMLProps, HTMLAttributes, Ref } from "react";

export enum CardVariant {
  post = 'post',
  featured = 'featured'
}

export interface CardProps extends 
  DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, HTMLDivElement
  > {
  ref?: Ref<HTMLDivElement>;
  image: string;
}

export interface BlogCardProps extends CardProps {
  variant?: `${CardVariant}`;
}