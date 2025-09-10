"use client";
import { forwardRef } from "react";
import dayjs from "dayjs";
import _ from "lodash";

import { NavItem } from "@/app/(home)/components/floating-navbar/floating-navbar.entity";
import { contactLinks } from "@/constants/contact-links";

import { DotsBackground } from "../dots-background";
import { WeatherText } from "../weather-text";
import { WobbleButton } from "../button";
import { Title } from "../title";

import styles from "./footer.module.scss";

export const Footer = forwardRef<HTMLElement, { navLinks: NavItem[] }>(function Footer(
  { navLinks },
  ref
) {
  const goToAppLink = (sectionId: "skills" | "exp" | "resume") => () => {
    const navItem = navLinks.find((link) => link.id === sectionId);
    if (navItem && navItem.element) {
      navItem.element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToExternalLink = (link: string) => () => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.click();
    anchor.remove();
  };

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.footer__content}>
        <section className={styles.footer__content__connect}>
          <Title firstLine="Let's" secondLine="Connect." />
          <div>
            <a href="mailto:acevedochristian90@gmail.com" target="_blank">
              acevedochristian90@gmail.com
            </a>
          </div>
          <div className={styles.footer__content__connect__social}>
            {_.map(contactLinks, ({ link, Icon }, key) => (
              <WobbleButton key={key} onClick={goToExternalLink(link)}>
                <Icon className="md:h-7 md:w-7 lg:h-8 lg:w-8" />
              </WobbleButton>
            ))}
          </div>
        </section>
        <section className={styles.footer__content__nav}>
          <nav>
            <ul className={styles.footer__content__nav__elements}>
              <li className="group" onClick={goToAppLink("skills")}>
                <h5>
                  <span data-text="Skills">Skills</span>
                </h5>
                <p>
                  Check out the things I{"'"}m good at, from building websites to design and more.
                </p>
              </li>
              <li className="group" onClick={goToAppLink("exp")}>
                <h5>
                  <span data-text="Experience">Experience</span>
                </h5>
                <p>
                  Check out the things I{"'"}m good at, from building websites to design and more.
                </p>
              </li>
              <li className="group" onClick={goToAppLink("resume")}>
                <h5>
                  <span data-text="Resume">Resume</span>
                </h5>
                <p>See my work history and what I{"'"}ve achieved in a quick and easy resume.</p>
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
      <DotsBackground className="absolute left-0 top-0" speed={{ right: 0 }} />
    </footer>
  );
});
