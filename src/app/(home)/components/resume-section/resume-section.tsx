import Image from "next/image";

import { EspecularButton, LinkButton } from "@/components";
import { experiences } from "@/constants/experience";
import { cn } from "@/utils/cn";

import styles from "./resume-section.module.scss";

export default function ResumeSection() {
  const handleDownloadCV = () => {
    const a = document.createElement('a')
    a.href = `https://docs.google.com/document/d/${process.env.RESUME_FILE_ID}/export?format=pdf`
    a.download = 'David_Acevedo_CV.pdf'
    a.target = '_blank'
    a.click()
    a.remove()
  }

  return (
    <div className={styles.resume}>
      <div className={styles.resume__content}>
        <div className={cn(styles.resume__content__cards, "group")}>
          <div className={styles.resume__card}>
            <div className={styles.resume__card__content}>
              <div className='absolute w-full h-full left-0 right-0 overflow-hidden p-4'>
                <div className="rounded-full mx-auto my-3 overflow-hidden aspect-square w-fit outline-slate-800 outline-2">
                  <Image
                    className='rounded-full border-2 border-neutral-400/80 w-10 h-10 md:w-14 md:h-14'
                    src='/static/images/david-acevedo.webp'
                    alt='Photo'
                    width={56}
                    height={56}
                  />
                </div>
                <h2 className="w-full text-center text-red-500 font-semibold text-xs md:text-lg">
                  Cristian David Acevedo Posada
                </h2>
                <h4 className="w-full text-center text-[10px] md:text-sm">Senior Frontend Developer</h4>
                <span className='w-full h-[1px] bg-neutral-300 block my-2 md:my-4' />
                <h5 className="w-full uppercase text-red-500 text-[9px] md:text-xs font-semibold">Work Experience</h5>
                <span className='w-full h-[1px] bg-neutral-300 block mb-2 mt-1 md:mb-4 md:mt-2' />
                <ul>
                  {experiences.map((item) => (
                    <li key={item.id} className='text-[9px] md:text-xs mt-1 md:mt-3'>
                      <p className='font-semibold'>{item.company}</p>
                      <p className='italic'>{item.title}</p>
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
        <EspecularButton
          className="mb-8 [&>span]:text-lg"
          onClick={handleDownloadCV}
        >
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
