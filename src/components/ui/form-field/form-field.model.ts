import { IconName } from "@/constants/icons";
import { Icon } from "@tabler/icons-react";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, SyntheticEvent } from "react";

type BaseFormFieldProps<T = HTMLInputElement> = DetailedHTMLProps<
  ButtonHTMLAttributes<T>,
  T
>;

export enum IconPosition {
  left = "left",
  right = "right",
}

export type FormFieldIcon = IconName | Icon;

export interface FormFieldProps
  extends BaseFormFieldProps {
    label?: string;
    helpText?: string;
    error?: boolean;
    suffix?: string;
    prefix?: string;
    button?: string | ReactNode;
    buttonIcon?: FormFieldIcon;
    icon?: FormFieldIcon;
    iconPosition?: `${IconPosition}`;
    onButtonClick?: (event: SyntheticEvent) => void;
    placeholder?: string;
    classes?: FormFieldClasses;
}

export interface FormFieldClasses {
  root?: string;
  input?: string;
  prefix?: string;
  suffix?: string;
  button?: string;
  field?: string;
  container?: string;
}