import { IconArrowUpRight, IconCalendar } from "@tabler/icons-react";
import { forwardRef, useCallback, useMemo } from "react";
import dayjs from "dayjs";

import { Avatar } from "@/components/ui/avatar";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/utils/cn";

import { CardProps } from "../card.entity";

import styles from "./featured.module.scss";

const FeaturedCard = forwardRef<HTMLDivElement, CardProps>(
  ({ className, image, title, description, avatar, date, tags, ...props }, ref): JSX.Element => {
    const formattedDate = useMemo(() => dayjs(date || new Date()).format("MMM DD, YYYY"), [date]);

    const getInitials = useCallback(
      (name: string) =>
        name
          .split(" ")
          .slice(0, 2)
          .map((word) => word[0])
          .join(""),
      []
    );

    return (
      <article
        ref={ref}
        className={cn(styles.featured, className)}
        style={{
          ["--bg-image" as any]: `url(${image})`,
        }}
        {...props}
      >
        <section className={styles.featured__content}>
          <aside className={styles.featured__content__header}>
            <div>
              <h3 className={styles.featured__content__title}>{title}</h3>
              <p className={styles.featured__content__description}>{description}</p>
            </div>
            <span className={styles.featured__content__header__icon}>
              <IconArrowUpRight size={32} />
            </span>
          </aside>
          <aside className={styles.featured__content__info}>
            <div className="flex gap-4">
              <div className={styles.featured__content__info__element}>
                {avatar.img ? (
                  <Avatar alt={`${avatar.name} Avatar`} src={avatar.img} />
                ) : (
                  <Avatar>{getInitials(avatar.name)}</Avatar>
                )}
                <h5>{avatar.name}</h5>
              </div>
              <div className={styles.featured__content__info__element}>
                <Avatar>
                  <IconCalendar />
                </Avatar>
                <h5>{formattedDate}</h5>
              </div>
            </div>

            {tags && (
              <div className="flex gap-3">{tags?.map((tag) => <Chip key={tag}>{tag}</Chip>)}</div>
            )}
          </aside>
        </section>
      </article>
    );
  }
);

FeaturedCard.displayName = "FeaturedCard";

export default FeaturedCard;
