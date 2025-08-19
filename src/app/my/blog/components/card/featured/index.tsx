import { IconArrowUpRight, IconCalendar } from "@tabler/icons-react";
import { forwardRef } from "react";

import { Avatar } from "@/components/ui/avatar";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/utils/cn";

import { CardProps } from "../card.entity";

import styles from './featured.module.scss';
import dayjs from "dayjs";

const FeaturedCard = forwardRef<HTMLDivElement, CardProps>
  (({ className, image, ...props}, ref): JSX.Element => {
  return (
    <article
      ref={ref}
      className={cn(
        styles.featured,
        className
      )}
      style={{
        ['--bg-image' as any]: `url(${image})`
      }}
      {...props}
    >
      <section className={styles.featured__content}>
        <aside className={styles.featured__content__header}>
          <div>
            <h3 className={styles.featured__content__title}>
              Desgin In The Age Of AI: How to adapt lazily.
            </h3>
            <p>With slothUI, you can unleash your inner Gen Z and just stop caring about anything else.</p>
          </div>
          <span className={styles.featured__content__header__icon}>
            <IconArrowUpRight size={32} />
          </span>
        </aside>
        <aside className={styles.featured__content__info}>
          <div className="flex gap-4">
            <div className={styles.featured__content__info__tag}>
              <Avatar
                alt="User Avatar"
                src="/static/images/david-acevedo.webp"
              />
              <h5>
                David Acevedo
              </h5>
            </div>
            <div className={styles.featured__content__info__tag}>
              <Avatar>
                <IconCalendar />
              </Avatar>
              <h5>
                {dayjs().format('MMM DD, YYYY')}
              </h5>
            </div>
          </div>

          <div className="flex gap-3">
            <Chip>
              UI/UX
            </Chip>
            <Chip>
              Design System
            </Chip>
            <Chip>
              Sleep & Care
            </Chip>
          </div>
        </aside>
      </section>
    </article>
  )
})

FeaturedCard.displayName = 'FeaturedCard';

export default FeaturedCard;