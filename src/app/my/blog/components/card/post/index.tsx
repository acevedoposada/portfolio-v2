import { forwardRef } from "react";
import Image from "next/image";

import { Chip } from "@/components/ui/chip";
import { cn } from "@/utils/cn";

import { CardProps } from "../card.entity";

import styles from "./post.module.scss";
import { Avatar } from "@/components/ui/avatar";

const PostCard = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, image, title, description, avatar, tags, readTime, ...props },
    ref
  ): JSX.Element => {
    return (
      <article ref={ref} className={cn(styles.post, "group", className)} {...props}>
        <Image
          src={image}
          alt="Post image cover"
          width={300}
          height={200}
          className={styles.post__img}
        />
        <div className="pb-2 pt-4">
          <div className="flex gap-2">
            {tags?.map((tag) => (
              <Chip key={tag} variant="tonal" color="default" size="sm">
                {tag}
              </Chip>
            ))}
          </div>
          <h3 className={styles.post__title}>{title}</h3>
          <p className={styles.post__description}>{description}</p>
          <div className={cn(styles.post__info, "group-hover:translate-y-2")}>
            <div className="flex items-center gap-3 text-sm font-semibold opacity-80">
              {avatar.img ? (
                <Avatar src={avatar.img} alt={`${avatar.name} avatar`} disableGlow />
              ) : (
                <Avatar>{avatar.name}</Avatar>
              )}
              <p>{avatar.name}</p>
            </div>
            {readTime && <p className="text-sm opacity-50">{readTime}min read</p>}
          </div>
        </div>
      </article>
    );
  }
);

PostCard.displayName = "PostCard";

export default PostCard;
