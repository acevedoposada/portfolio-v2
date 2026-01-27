import Image from "next/image";

import { EspecularButton, LinkButton } from "@/components";
import { experiences } from "@/constants/experience";
import { cn } from "@/utils/cn";

import styles from "./resume-section.module.scss";

export default function ResumeSection() {
  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = `https://docs.google.com/document/d/${process.env.RESUME_FILE_ID}/export?format=pdf`;
    a.download = "David_Acevedo_CV.pdf";
    a.target = "_blank";
    a.click();
    a.remove();
  };

  return (
    <div className={styles.resume}>
      <div className={styles.resume__content}>
        <div className={cn(styles.resume__content__cards, "group")}>
          <div className={styles.resume__card}>
            <div className={styles.resume__card__content}>
              <div className="absolute left-0 right-0 h-full w-full overflow-hidden p-4">
                <div className="mx-auto my-3 aspect-square w-fit overflow-hidden rounded-full outline-2 outline-slate-800">
                  <Image
                    className="h-10 w-10 rounded-full border-2 border-neutral-400/80 md:h-14 md:w-14"
                    src="/static/images/david-acevedo.webp"
                    alt="Photo"
                    width={56}
                    height={56}
                  />
                </div>
                <h2 className="w-full text-center text-xs font-semibold text-red-500 md:text-lg">
                  Cristian David Acevedo Posada
                </h2>
                <h4 className="w-full text-center text-[10px] md:text-sm">
                  Senior Frontend Developer
                </h4>
                <span className="my-2 block h-[1px] w-full bg-neutral-300 md:my-4" />
                <h5 className="w-full text-[9px] font-semibold uppercase text-red-500 md:text-xs">
                  Work Experience
                </h5>
                <span className="mb-2 mt-1 block h-[1px] w-full bg-neutral-300 md:mb-4 md:mt-2" />
                <ul>
                  {experiences.map((item) => (
                    <li key={item.id} className="mt-1 text-[9px] md:mt-3 md:text-xs">
                      <p className="font-semibold">{item.company}</p>
                      <p className="italic">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.resume__card}>
            <div className={styles.resume__card__content}></div>
          </div>
          <div className={styles.resume__content__cards__blobs} />
        </div>
        <EspecularButton className="mb-8 [&>span]:text-lg" onClick={handleDownloadCV}>
          Download Resume
        </EspecularButton>
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
