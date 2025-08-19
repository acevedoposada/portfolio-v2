import { IconArrowUpRight, IconCalendar } from "@tabler/icons-react";
import { forwardRef } from "react";

import { Avatar } from "@/components/ui/avatar";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/utils/cn";

import { CardProps } from "../card.entity";

import styles from './featured.module.scss';

const FeaturedCard = forwardRef<HTMLDivElement, CardProps>
  (({ className, ...props}, ref): JSX.Element => {
  return (
    <article
      ref={ref}
      className={cn(
        styles.featured,
        className
      )}
      style={{
        ['--bg-image' as any]: `url(${"https://images.unsplash.com/photo-1754901350480-c0fdd1a427b4?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`
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
                Jun 25, 2025
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

export default FeaturedCard;