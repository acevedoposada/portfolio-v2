import {
  IconBrandCodesandbox,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Title } from "../title";
import styles from "./footer.module.scss";
import { DotsBackground } from "../dots-background";
import { BackgroundBeams } from "../background-beams";
import dayjs from "dayjs";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLElement>(function Footer({}, ref) {
  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.footer__content}>
        <section className={styles.footer__content__connect}>
          <Title firstLine="Let's" secondLine="Connect." />
          <div>
            <a href="mailto:acevedochristian90@gmail.com">
              acevedochristian90@gmail.com
            </a>
          </div>
          <ul className={styles.footer__content__connect__social}>
            <li>
              <IconBrandGithub className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </li>
            <li>
              <IconBrandLinkedin className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </li>
            <li>
              <IconBrandInstagram className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </li>
            <li>
              <IconBrandCodesandbox className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </li>
          </ul>
        </section>
        <section className={styles.footer__content__nav}>
          <nav>
            <ul className={styles.footer__content__nav__elements}>
              <li>
                <p>Skills</p>
                <p>
                  Check out the things I{"'"}m good at, from building websites
                  to design and more.
                </p>
              </li>
              <li>
                <p>Experience</p>
                <p>
                  Check out the things I{"'"}m good at, from building websites
                  to design and more.
                </p>
              </li>
              <li>
                <p>Resume</p>
                <p>
                  See my work history and what I{"'"}ve achieved in a quick and
                  easy resume.
                </p>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/davidchacevedo_"
                  target="_blank"
                >
                  <p>Instagram</p>
                  <p>Good memories, best times. My photo journal.</p>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.footer__content__bottom}>
          {dayjs().year()} © David Acevedo
        </section>
      </div>
      <DotsBackground
        hiddenDots="left"
        className="absolute top-0"
        speed={{ right: 10 }}
      />
      <BackgroundBeams className="pointer-events-none select-none" />
    </footer>
  );
});
