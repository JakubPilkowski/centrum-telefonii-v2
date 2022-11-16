import React, { FC, useCallback, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import ScrollAnimationComponent from "components/ScrollAnimationComponent";

import whiteBrokenPhone from "public/phone_white_d.jpg";
import blackBrokenPhone from "public/phone_black_d.jpg";
import whiteFixedPhone from "public/phone_white_r.jpg";
import blackFixedPhone from "public/phone_black_r.jpg";

import styles from "./Service.module.css";
import slideStyles from "styles/Slide.module.css";

const Service: FC = () => {
  const [hasServiceAnimation, setServiceAnimation] = useState(false);

  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop;
    },
    []
  );

  const handleServiceAnimation = useCallback(
    () => setServiceAnimation(true),
    []
  );

  return (
    <section id="service" className={clsx(styles.offer, styles.service)}>
      <div className={styles.offerContainer}>
        <ScrollAnimationComponent
          onDetect={handleDetect}
          className={clsx(
            styles.offerImages,
            styles.serviceImages,
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
                hasServiceAnimation && styles.serviceAnimationFromIn
              )}
            >
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                <Image
                  src={whiteBrokenPhone}
                  className={styles.imgFirst}
                  alt="Telefon biały zepsuty"
                />
              </div>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                <Image
                  src={blackBrokenPhone}
                  className={styles.imgFirst}
                  alt="Telefon czarny zepsuty"
                />
              </div>
            </div>
            <div
              className={clsx(
                styles.imageContainer,
                styles.hide,
                hasServiceAnimation && styles.serviceAnimationFromOut
              )}
            >
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                <Image
                  src={whiteFixedPhone}
                  className={styles.imgFirst}
                  alt="Telefon biały naprawiony"
                />
              </div>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                <Image
                  src={blackFixedPhone}
                  className={styles.imgFirst}
                  alt="Telefon czarny naprawiony"
                />
              </div>
            </div>
          </div>
          <div className={styles.imageLabelWrapper}>
            <h3
              className={clsx(
                styles.imageLabel,
                styles.show,
                hasServiceAnimation && styles.serviceAnimationFromIn
              )}
            >
              Przed
            </h3>
            <h3
              className={clsx(
                styles.imageLabel,
                styles.hide,
                hasServiceAnimation && styles.serviceAnimationFromOut
              )}
            >
              Po
            </h3>
          </div>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent
          className={clsx(
            styles.offerListContainer,
            styles.serviceListContainer,
            slideStyles.slide,
            slideStyles.slideOut
          )}
          onDetect={handleDetect}
          noReverseAnimation
          inClassName={slideStyles.slideIn}
        >
          <h1>
            <span className={clsx("material-icons", styles.buildIcon)}>
              construction
            </span>
            <span>Serwis</span>
          </h1>
          <ul className={clsx(styles.offerList, styles.serviceList)}>
            <li>Wymiana ekranów, gniazd, baterii, aparatów</li>
            <li>Naprawa głośników, mikrofonów, aparatów w telefonie</li>
            <li>Wymiana gniazd oraz baterii</li>
            <li>Wgrywanie nowego oprogramowania</li>
            <li>Ściąganie simlocków oraz innych blokad</li>
            <li>Czyszczenie telefonów po zalaniu</li>
            <li>Wykonywanie ekspertyzy</li>
            <li>Inne drobne usługi (zgrywanie danych, konfiguracja)</li>
          </ul>
        </ScrollAnimationComponent>
      </div>
    </section>
  );
};

export default Service;
