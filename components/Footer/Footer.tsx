import React, { FC } from "react";

import styles from "./Footer.module.css";
import clsx from "clsx";

const Footer: FC = () => {
  return (
    <footer
      id="footer"
      className={styles.footer}
      aria-labelledby="footer-title"
    >
      <h1 id="footer-title" className="visually-hidden">
        Kontakt
      </h1>
      <div className={styles.row}>
        <h2 className={clsx("h4", styles.label)}>Centrum Telefonii s.c. ®</h2>
        <a
          className={styles.text}
          href="mailto:centrumtelefoniiolsztyn@gmail.com"
        >
          centrumtelefoniiolsztyn@gmail.com
        </a>
      </div>
      <div className={styles.row}>
        <h2 className={clsx("h4", styles.label)}>CT na ulicy Kościuszki</h2>
        <a className={styles.text} href="tel:+48 604-436-345">
          604-436-345
        </a>
        <p className={styles.text}>ul.Kościuszki 19/2 Olsztyn</p>
        <p className={styles.text}>Poniedziałek-Piątek: 9:00-18:00</p>
        <p className={styles.text}>Sobota: 9:00-15:00</p>
      </div>
      <div className={styles.row}>
        <h2 className={clsx("h4", styles.label)}>CT w Manhattanie</h2>
        <a className={styles.text} href="tel:604-436-345">
          {" "}
          604-436-345{" "}
        </a>
        <p className={styles.text}>Plac Pułaskiego 7 lokal 62 Olsztyn</p>
        <p className={styles.text}>Poniedziałek-Piątek: 10:00-18:00</p>
        <p className={styles.text}>Sobota: 10:00-15:00</p>
      </div>
    </footer>
  );
};

export default Footer;
