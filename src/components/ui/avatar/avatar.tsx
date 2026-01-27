import { useMemo } from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";

import { AvatarProps } from "./avatar.entity";
import styles from "./avatar.module.scss";

export default function Avatar({
  children,
  className,
  src,
  alt,
  disableGlow,
  ...props
}: AvatarProps): JSX.Element {
  const content = useMemo(() => {
    if (src) {
      return <Image alt={alt} src={src} width={40} height={40} className={styles.avatar__img} />;
    }
    return children;
  }, [src, children, alt]);

  return (
    <span
      className={cn(
        styles.avatar,
        {
          [styles["avatar--no-border"]]: !!src,
          [styles["avatar--disable-glow"]]: disableGlow,
        },
        className
      )}
      {...props}
    >
      {content}
    </span>
  );
}
