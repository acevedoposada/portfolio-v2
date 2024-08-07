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
import { WobbleButton } from "../button";
import { WeatherText } from "../weather-text";

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
          <div className={styles.footer__content__connect__social}>
            <WobbleButton>
              <IconBrandGithub className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </WobbleButton>
            <WobbleButton>
              <IconBrandLinkedin className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </WobbleButton>
            <WobbleButton>
              <IconBrandInstagram className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </WobbleButton>
            <WobbleButton>
              <IconBrandCodesandbox className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </WobbleButton>
          </div>
        </section>
        <section className={styles.footer__content__nav}>
          <nav>
            <ul className={styles.footer__content__nav__elements}>
              <li className="group">
                <h5>
                  <span data-text="Skills">Skills</span>
                </h5>
                <p>
                  Check out the things I{"'"}m good at, from building websites
                  to design and more.
                </p>
              </li>
              <li className="group">
                <h5>
                  <span data-text="Experience">Experience</span>
                </h5>
                <p>
                  Check out the things I{"'"}m good at, from building websites
                  to design and more.
                </p>
              </li>
              <li className="group">
                <h5>
                  <span data-text="Resume">Resume</span>
                </h5>
                <p>
                  See my work history and what I{"'"}ve achieved in a quick and
                  easy resume.
                </p>
              </li>
              <li className="group">
                <a href={process.env.INSTAGRAM_URL} target="_blank">
                  <h5>
                    <span data-text="Instagram">Instagram</span>
                  </h5>
                  <p>Good memories, best times. My photo journal.</p>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.footer__content__bottom}>
          <p>Developed with 💜 by David Acevedo - {dayjs().year()}</p>
          <WeatherText showTemperature />
        </section>
      </div>
      <DotsBackground
        hiddenDots="left"
        className="absolute left-0 top-0"
        speed={{ right: 0 }}
      />
      <BackgroundBeams className="pointer-events-none select-none" />
    </footer>
  );
});
