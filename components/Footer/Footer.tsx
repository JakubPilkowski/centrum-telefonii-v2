import React, { FC } from "react";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.row}>
        <h4 className={styles.label}>Centrum Telefonii s.c. ®</h4>
        <p className={styles.text}>E-mail: centrumtelefoniiolsztyn@gmail.com</p>
      </div>
      <div className={styles.row}>
        <h4 className={styles.label}>CT na ulicy Kościuszki</h4>
        <a className={styles.text} href="tel:668-226-158">
          {" "}
          668-226-158{" "}
        </a>
        <a className={styles.text} href="tel:+48 (89)533-71-32">
          {" "}
          +48 (89)533-71-32{" "}
        </a>
        <p className={styles.text}>ul.Kościuszki 19/2 Olsztyn</p>
        <p className={styles.text}>Poniedziałek-Piątek: 9:00-18:00</p>
        <p className={styles.text}>Sobota: 9:00-15:00</p>
      </div>
      <div className={styles.row}>
        <h4 className={styles.label}>CT w Manhattanie</h4>
        <a className={styles.text} href="tel:698-390-390">
          {" "}
          698-390-390{" "}
        </a>
        <a className={styles.text} href="tel:+48(89)533-71-32">
          {" "}
          +48 (89)533-71-32{" "}
        </a>
        <p className={styles.text}>Plac Pułaskiego 7 lokal 62 Olsztyn</p>
        <p className={styles.text}>Poniedziałek-Piątek: 10:00-18:00</p>
        <p className={styles.text}>Sobota: 10:00-15:00</p>
      </div>
    </footer>
  );
};

export default Footer;
