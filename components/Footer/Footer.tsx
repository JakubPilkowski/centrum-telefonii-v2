import React, { FC } from "react";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.row}>
        <h3 className={styles.label}>Centrum Telefonii s.c. ®</h3>
        <h4 className={styles.text}>
          E-mail: centrumtelefoniiolsztyn@gmail.com
        </h4>
      </div>
      <div className={styles.row}>
        <h3 className={styles.label}>CT na ulicy Kościuszki</h3>
        <a className={styles.text} href="tel:668-226-158">
          {" "}
          668-226-158{" "}
        </a>
        <a className={styles.text} href="tel:+48 (89)533-71-32">
          {" "}
          +48 (89)533-71-32{" "}
        </a>
        <h4 className={styles.text}>ul.Kościuszki 19/2 Olsztyn</h4>
        <h4 className={styles.text}>Poniedziałek-Piątek: 9:00-18:00</h4>
        <h4 className={styles.text}>Sobota: 9:00-15:00</h4>
      </div>
      <div className={styles.row}>
        <h3 className={styles.label}>CT w Manhattanie</h3>
        <a className={styles.text} href="tel:698-390-390">
          {" "}
          698-390-390{" "}
        </a>
        <a className={styles.text} href="tel:+48(89)533-71-32">
          {" "}
          +48 (89)533-71-32{" "}
        </a>
        <h4 className={styles.text}>Plac Pułaskiego 7 lokal 62 Olsztyn</h4>
        <h4 className={styles.text}>Poniedziałek-Piątek: 10:00-18:00</h4>
        <h4 className={styles.text}>Sobota: 10:00-15:00</h4>
      </div>
    </footer>
  );
};

export default Footer;
