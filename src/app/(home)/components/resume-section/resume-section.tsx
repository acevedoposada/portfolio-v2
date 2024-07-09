import { FluidButton, LinkButton } from "@/components";

import styles from "./resume-section.module.scss";
import { cn } from "@/utils/cn";

export default function ResumeSection() {
  return (
    <div className={styles.resume}>
      <div className={styles.resume__content}>
        <div className={cn(styles.resume__content__cards, "group")}>
          <div className={styles.resume__card}>
            <div className={styles.resume__card__content}></div>
          </div>
          <div className={styles.resume__card}>
            <div className={styles.resume__card__content}></div>
          </div>
          <div className={styles.resume__content__cards__blobs} />
        </div>
        <FluidButton
          className="mb-8 border-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
          disableBorder
        >
          View Resume
        </FluidButton>
        <ul className={styles.resume__content__links}>
          <li>
            <LinkButton
              href={process.env.LINKEDIN_URL}
              target="_blank"
              className="flex items-center gap-1"
            >
              <i className="ti ti-brand-linkedin text-2xl" />
              Linkedin
            </LinkButton>
          </li>
          <li>
            <LinkButton
              href={process.env.GITHUB_URL}
              target="_blank"
              className="flex items-center gap-1"
            >
              <i className="ti ti-brand-github text-2xl" />
              Github
            </LinkButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
