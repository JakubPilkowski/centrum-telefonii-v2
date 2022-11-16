import clsx from "clsx";
import React, { FC, useCallback, useState } from "react";
import Image from "next/image";

import ScrollAnimationComponent from "components/ScrollAnimationComponent";

import venusEtuiPhoto from "public/etui_venus.png";
import glass9dPhoto from "public/szklo_9d.png";
import jellyCasePhoto from "public/guma_jelly.png";
import chargerPhoto from "public/ladowarka.png";

import styles from "./Accessories.module.css";
import slideStyles from "styles/Slide.module.css";

const Accessories: FC = () => {
  const [hasAccessoriesAnimation, setAccessoriesAnimation] = useState(false);

  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop - element.offsetHeight / 2;
    },
    []
  );

  const handleServiceAnimation = useCallback(
    () => setAccessoriesAnimation(true),
    []
  );

  return (
    <section
      id="accessories"
      className={clsx(styles.offer, styles.accessories)}
    >
      <div className={clsx(styles.offerContainer)}>
        <ScrollAnimationComponent
          onDetect={handleDetect}
          className={clsx(
            styles.offerListContainer,
            slideStyles.slide,
            slideStyles.slideOut
          )}
          noReverseAnimation
          onAnimIn={handleServiceAnimation}
          inClassName={slideStyles.slideIn}
        >
          <h1>
            <span>Akcesoria</span>
            <span className={clsx("material-icons", styles.phoneIcon)}>
              phone_iphone
            </span>
          </h1>
          <ul className={clsx(styles.offerList, styles.accessoriesList)}>
            <li>Etui, pokrowce oraz casy</li>
            <li>Szkła hartowane</li>
            <li>Kable, ładowarki sieciowe oraz samochodowe</li>
            <li>Baterie oraz powerbanki</li>
            <li>Uchwyty samochodowe na szybę oraz na wentylacje</li>
            <li>Słuchawki przewodowe i bezprzewodowe</li>
            <li>Karty pamięci</li>
          </ul>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent
          onDetect={handleDetect}
          className={clsx(
            styles.offerImages,
            slideStyles.slide,
            slideStyles.slideOut
          )}
          noReverseAnimation
          onAnimIn={handleServiceAnimation}
          inClassName={slideStyles.slideIn}
        >
          <div className={styles.imageContainerWrapper}>
            <div
              className={clsx(
                styles.imageContainer,
                styles.show,
                hasAccessoriesAnimation && styles.serviceAnimationFromIn
              )}
            >
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.accessoriesImageWrapper
                )}
              >
                <Image src={venusEtuiPhoto} alt="Etui marki venus" />
              </div>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.accessoriesImageWrapper
                )}
              >
                <Image src={glass9dPhoto} alt="Szkło hartowane 9D" />
              </div>
            </div>
            <div
              className={clsx(
                styles.imageContainer,
                styles.hide,
                hasAccessoriesAnimation && styles.serviceAnimationFromOut
              )}
            >
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.accessoriesImageWrapper
                )}
              >
                <Image src={jellyCasePhoto} alt="Case marki Jelly" />
              </div>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.accessoriesImageWrapper
                )}
              >
                <Image src={chargerPhoto} alt="Ładowarka sieciowa" />
              </div>
            </div>
          </div>
        </ScrollAnimationComponent>
      </div>
    </section>
  );
};

export default Accessories;
