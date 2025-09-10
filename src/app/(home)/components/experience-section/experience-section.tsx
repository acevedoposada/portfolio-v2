import dayjs, { Dayjs } from "dayjs";

import styles from "./experience-section.module.scss";
import { cn } from "@/utils/cn";
import { Title } from "@/components";
import { experiences } from "@/constants/experience";

interface ExperienceItemProps {
  title: string;
  company: string;
  startDate: Date | string | Dayjs;
  dueDate: Date | string | Dayjs | null;
  workType: string;
}

function ExperienceItem({ company, dueDate, startDate, title, workType }: ExperienceItemProps) {
  return (
    <div className={cn(styles.item, "group")}>
      <div className={cn(styles.item__section, styles["item__section--left"])}>
        <h4 className={styles.item__section__title}>
          <span data-text={title}>{title}</span>
        </h4>
        <p className={styles.item__section__company}>{company}</p>
      </div>
      <div className={cn(styles.item__section, styles["item__section--right"])}>
        <p>
          {dayjs(startDate).format("MMM YYYY")} -{" "}
          {dueDate ? dayjs(dueDate).format("MMM YYYY") : "Current"}
        </p>
        <p>{workType}</p>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div className={styles.experience}>
      <div className={styles.experience__title}>
        <Title firstLine="Experience" secondLine="History" />
      </div>
      <div className={styles.experience__content}>
        {experiences.map(({ id, ...exp }) => (
          <ExperienceItem key={id} {...exp} />
        ))}
      </div>
    </div>
  );
}
