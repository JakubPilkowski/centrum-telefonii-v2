import React, { FC } from "react";
import clsx from "clsx";

import styles from "./Timers.module.css";

const Timers: FC = () => {
  return (
    <>
      <section id="timers" className={styles.timers}>
        <h1 className={styles.title}>Centrum Telefonii to...</h1>
        <div className={styles.timersWrapper}>
          <div id="clients" className={styles.timerItem}>
            <span className={clsx("material-icons", styles.timerIcon)}>
              sentiment_satisfied_alt
            </span>
            <h1>9999</h1>
            <h2>tysiące zadowolonych klientów</h2>
          </div>

          <div id="repairs" className={styles.timerItem}>
            <span className={clsx("material-icons", styles.timerIcon)}>
              build
            </span>
            <h1>999</h1>
            <h2>setki naprawionych telefonów</h2>
          </div>

          <div id="brand" className={styles.timerItem}>
            <span className={clsx("material-icons", styles.timerIcon)}>
              calendar_month
            </span>
            <h1>22</h1>
            <h2>najdłużej funkcjonująca firma telefoniczna w Olsztynie</h2>
          </div>
        </div>
      </section>
      <div className={styles.timersTriangle}></div>
    </>
  );
};

export default Timers;
