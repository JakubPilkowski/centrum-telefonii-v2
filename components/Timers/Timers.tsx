import React, { FC, RefObject, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

import textCounterAnimation from "utils/textCounterAnimation";

import styles from "./Timers.module.css";
import { variants } from "components/Accessory/variants";

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
        <div className={styles.timersContainer}>
          <h1 className={styles.title}>Centrum Telefonii to...</h1>
          <div className={styles.timersWrapper}>
            <motion.div
              className={clsx(styles.timerItem)}
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={0}
            >
              <span className={clsx("material-icons", styles.timerIcon)}>
                sentiment_satisfied_alt
              </span>
              <h4 ref={clientsTitleRef}>9999</h4>
              <h5>tysiące zadowolonych klientów</h5>
            </motion.div>

            <motion.div
              className={clsx(styles.timerItem)}
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1}
            >
              <span className={clsx("material-icons", styles.timerIcon)}>
                build
              </span>
              <h4 ref={repairsTitleRef}>999</h4>
              <h5>setki naprawionych telefonów</h5>
            </motion.div>

            <motion.div
              className={clsx(styles.timerItem)}
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={2}
            >
              <span className={clsx("material-icons", styles.timerIcon)}>
                calendar_month
              </span>
              <h4 ref={brandTitleRef}>22</h4>
              <h5>najdłużej funkcjonująca firma telefoniczna w Olsztynie</h5>
            </motion.div>
          </div>
        </div>
      </section>
      <div className={styles.timersTriangle}></div>
    </>
  );
};

export default Timers;
