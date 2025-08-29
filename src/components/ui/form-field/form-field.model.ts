import { IconName } from "@/constants/icons";
import { Icon, IconProps } from "@tabler/icons-react";
import { ButtonHTMLAttributes, ComponentType, DetailedHTMLProps, ReactNode } from "react";

type BaseFormFieldProps<T = HTMLInputElement> = DetailedHTMLProps<
  ButtonHTMLAttributes<T>,
  T
>;

export interface FormFieldProps
  extends BaseFormFieldProps {
    suffix?: string;
    prefix?: string;
    button?: string | ReactNode;
    buttonIcon?: IconName | Icon;
}