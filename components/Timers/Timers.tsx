import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import ScrollAnimationComponent from "components/ScrollAnimationComponent";

import styles from "./Timers.module.css";
import slideStyles from "styles/Slide.module.css";
import textCounterAnimation from "utils/textCounterAnimation";

const Timers: FC = () => {
  const clientsTitleRef = useRef<HTMLHeadingElement>(null);
  const repairsTitleRef = useRef<HTMLHeadingElement>(null);
  const brandTitleRef = useRef<HTMLHeadingElement>(null);

  const [hasTimersAnimation, setTimersAnimation] = useState(false);

  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop - element.offsetHeight / 2;
    },
    []
  );

  const handleTimersAnimation = useCallback(() => setTimersAnimation(true), []);

  useEffect(() => {
    if (!hasTimersAnimation) return;

    const clientsTitle = clientsTitleRef.current;
    const repairsTitle = repairsTitleRef.current;
    const brandTitle = brandTitleRef.current;

    if (!clientsTitle || !repairsTitle || !brandTitle) return;

    textCounterAnimation(clientsTitle, 1000, 9999, 3000);
    textCounterAnimation(repairsTitle, 100, 999, 3000);
    textCounterAnimation(brandTitle, 0, 22, 3000);
  }, [hasTimersAnimation]);

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
            onAnimIn={handleTimersAnimation}
          >
            <span className={clsx("material-icons", styles.timerIcon)}>
              sentiment_satisfied_alt
            </span>
            <h1 ref={clientsTitleRef}>9999</h1>
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
            <h1 ref={repairsTitleRef}>999</h1>
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
            <h1 ref={brandTitleRef}>22</h1>
            <h2>najdłużej funkcjonująca firma telefoniczna w Olsztynie</h2>
          </ScrollAnimationComponent>
        </div>
      </section>
      <div className={styles.timersTriangle}></div>
    </>
  );
};

export default Timers;
