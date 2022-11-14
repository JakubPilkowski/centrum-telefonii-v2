import React, { FC, useCallback } from "react";
import clsx from "clsx";

import ScrollAnimationComponent from "components/ScrollAnimationComponent";

import styles from "./Timers.module.css";
import slideStyles from "styles/Slide.module.css";

const Timers: FC = () => {
  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop - element.offsetHeight / 2;
    },
    []
  );

  return (
    <>
      <section id="timers" className={styles.timers}>
        <h1 className={styles.title}>Centrum Telefonii to...</h1>
        <div className={styles.timersWrapper}>
          <ScrollAnimationComponent
            onDetect={handleDetect}
            noReverseAnimation
            inClassName={slideStyles.slideIn}
            className={clsx(
              styles.timerItem,
              slideStyles.slide,
              slideStyles.slideOut
            )}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              sentiment_satisfied_alt
            </span>
            <h1>9999</h1>
            <h2>tysiące zadowolonych klientów</h2>
          </ScrollAnimationComponent>

          <ScrollAnimationComponent
            onDetect={handleDetect}
            noReverseAnimation
            inClassName={slideStyles.slideIn}
            className={clsx(
              styles.timerItem,
              slideStyles.slide,
              slideStyles.slideOut
            )}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              build
            </span>
            <h1>999</h1>
            <h2>setki naprawionych telefonów</h2>
          </ScrollAnimationComponent>

          <ScrollAnimationComponent
            onDetect={handleDetect}
            noReverseAnimation
            inClassName={slideStyles.slideIn}
            className={clsx(
              styles.timerItem,
              slideStyles.slide,
              slideStyles.slideOut
            )}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              calendar_month
            </span>
            <h1>22</h1>
            <h2>najdłużej funkcjonująca firma telefoniczna w Olsztynie</h2>
          </ScrollAnimationComponent>
        </div>
      </section>
      <div className={styles.timersTriangle}></div>
    </>
  );
};

export default Timers;
