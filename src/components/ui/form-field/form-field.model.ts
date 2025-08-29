import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type BaseFormFieldProps<T = HTMLInputElement> = DetailedHTMLProps<
  ButtonHTMLAttributes<T>,
  T
>;

export interface FormFieldProps
  extends BaseFormFieldProps {
    suffix?: string;
    prefix?: string;
    button?: string | ReactNode;
    buttonIcon?: string;
}