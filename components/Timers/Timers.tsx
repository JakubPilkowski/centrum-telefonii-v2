import React, { FC, RefObject, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

import textCounterAnimation from "utils/textCounterAnimation";

import styles from "./Timers.module.css";
import { scrollTriggerAnimation } from "utils/animations";

function useCounterAnimation(
  ref: RefObject<any>,
  start: number,
  end: number,
  time: number
) {
  const areClientsInView = useInView(ref, { once: true });

  useEffect(() => {
    const clientsTitle = ref.current;
    if (!clientsTitle) return;

    if (!areClientsInView) return;

    textCounterAnimation(clientsTitle, start, end, time);
  }, [areClientsInView, end, ref, start, time]);
}

const diffInYears = (year: number) => {
  const date = new Date();
  const diff = date.getFullYear() - year;
  return diff;
};

const Timers: FC = () => {
  const clientsTitleRef = useRef<HTMLHeadingElement>(null);
  const repairsTitleRef = useRef<HTMLHeadingElement>(null);
  const brandTitleRef = useRef<HTMLHeadingElement>(null);

  useCounterAnimation(clientsTitleRef, 1000, 9999, 3000);
  useCounterAnimation(repairsTitleRef, 100, 999, 3000);
  useCounterAnimation(brandTitleRef, 0, diffInYears(1998), 3000);

  return (
    <>
      <section id="timers" className={styles.timers}>
        <h1 className={styles.title}>Centrum Telefonii to...</h1>
        <div className={styles.timersWrapper}>
          <motion.div
            className={clsx(styles.timerItem)}
            {...scrollTriggerAnimation}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              sentiment_satisfied_alt
            </span>
            <h1 ref={clientsTitleRef}>9999</h1>
            <h2>tysiące zadowolonych klientów</h2>
          </motion.div>

          <motion.div
            className={clsx(styles.timerItem)}
            {...scrollTriggerAnimation}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              build
            </span>
            <h1 ref={repairsTitleRef}>999</h1>
            <h2>setki naprawionych telefonów</h2>
          </motion.div>

          <motion.div
            className={clsx(styles.timerItem)}
            {...scrollTriggerAnimation}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              calendar_month
            </span>
            <h1 ref={brandTitleRef}>22</h1>
            <h2>najdłużej funkcjonująca firma telefoniczna w Olsztynie</h2>
          </motion.div>
        </div>
      </section>
      <div className={styles.timersTriangle}></div>
    </>
  );
};

export default Timers;
