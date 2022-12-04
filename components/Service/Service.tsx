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
import SwapPhoto from "components/SwapPhoto";
import ServiceItem from "./ServiceItem";
import ActionButton from "components/ActionButton";

const Service: FC = () => {
  const [hasFirstImageAnimation, setFirstImageAnimation] = useState(false);
  const [hasSecondImageAnimation, setSecondImageAnimation] = useState(false);

  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop;
    },
    []
  );

  const handleImageAnimation = useCallback(
    () => setFirstImageAnimation(true),
    []
  );

  return (
    <section id="service" className={clsx(styles.service)}>
      <div className={styles.firstSectionContainer}>
        <div className={styles.serviceSectionItem}>
          <h1 className={styles.serviceTitle}>Czym się zajmujemy?</h1>
          <p>
            Specjalizujemy się w naprawie telefonów komórkowych, smartfonów oraz
            urządzeń elektrycznych takich jak komputery, słuchawki, aparaty.
          </p>
          <p>Każdą usługę w naszej firmie cechuje:</p>
          <div className={styles.serviceAdvantagesContainer}>
            <div className={styles.serviceAdvantageWrapper}>
              <span
                className={clsx("material-icons", styles.serviceAdvantageIcon)}
              >
                attach_money
              </span>
              <p className={styles.serviceAdvantageText}>
                najniższa ceny na rynku
              </p>
            </div>
            <div className={styles.serviceAdvantageWrapper}>
              <span
                className={clsx("material-icons", styles.serviceAdvantageIcon)}
              >
                access_time
              </span>
              <p className={styles.serviceAdvantageText}>krótki czas naprawy</p>
            </div>
            <div className={styles.serviceAdvantageWrapper}>
              <span
                className={clsx("material-icons", styles.serviceAdvantageIcon)}
              >
                workspace_premium
              </span>
              <p className={styles.serviceAdvantageText}>
                3-miesięczna gwarancja
              </p>
            </div>
          </div>
          <p>
            Dzięki {new Date().getFullYear() - 1998}-letniemu doświadczeniu
            wykonujemy nasze usługi z najwyższą jakością oraz największa
            precyzją zapewniając <b>100% </b>
            satysfakcji z wykonanej usługi.
          </p>
          <a href="tel:+48 (89)533-71-32">
            <ActionButton
              text="Wycena naprawy?"
              type="call"
              className={styles.serviceCallButton}
            />
          </a>
          {/* <div className={styles.serviceImageLabelWrapper}>
            <p
              className={clsx(
                styles.serviceImageLabel,
                styles.show,
                hasFirstImageAnimation && styles.serviceAnimationFromIn
              )}
            >
              Przed
            </p>
            <p
              className={clsx(
                styles.serviceImageLabel,
                styles.hide,
                hasFirstImageAnimation && styles.serviceAnimationFromOut
              )}
            >
              Po
            </p>
          </div> */}
        </div>
        <div className={styles.serviceSectionItem}>
          <SwapPhoto
            frontPhoto={whiteBrokenPhone}
            backPhoto={whiteFixedPhone}
            frontPhotoAlt="Telefon biały zepsuty"
            backPhotoAlt="Telefon biały naprawiony"
            isInfinity
            isStarted={hasFirstImageAnimation}
            className={styles.serviceImageContainer}
          />
        </div>
      </div>

      <div className={styles.secondSectionContainer}>
        <div className={styles.serviceSectionItem}>
          <h1 className={styles.serviceTitle}>Serwis oraz usługi</h1>
          <ul className={clsx(styles.offerList, styles.serviceList)}>
            <ServiceItem
              price="30"
              title="Wymiana gniazd, baterii, aparatów"
              className={styles.serviceListItem}
            />
            <ServiceItem
              price="100"
              title="Wymiana ekranów, modułów"
              className={styles.serviceListItem}
            />
            <ServiceItem
              price="30"
              title="Naprawa głośników, mikrofonów, aparatów w telefonie"
              className={styles.serviceListItem}
            />
            <ServiceItem
              price="40"
              title="Wgrywanie nowego oprogramowania"
              className={styles.serviceListItem}
            />
            <ServiceItem
              price="30"
              title="Ściąganie simlocków, hasła redmi oraz google"
              className={styles.serviceListItem}
            />
            <ServiceItem
              price="40"
              title="Czyszczenie telefonów po zalaniu"
              className={styles.serviceListItem}
            />
            <ServiceItem
              price="40"
              title="Drobne usługi (zgrywanie danych, konfiguracja)"
              className={styles.serviceListItem}
            />
          </ul>
          <p>* - Cena minimalna</p>
        </div>
        <div className={styles.serviceSectionItem}>
          <SwapPhoto
            frontPhoto={blackBrokenPhone}
            backPhoto={blackFixedPhone}
            frontPhotoAlt="Telefon czarny zepsuty"
            backPhotoAlt="Telefon czarny naprawiony"
            isInfinity
            isStarted={hasSecondImageAnimation}
            className={styles.serviceImageContainer}
          />
        </div>
      </div>

      {/* <ScrollAnimationComponent
          onDetect={handleDetect}
          className={clsx(
            styles.offerImages,
            styles.serviceImages,
            slideStyles.slide,
            slideStyles.slideOut
          )}
          noReverseAnimation
          onAnimIn={handleImageAnimation}
          inClassName={slideStyles.slideIn}
        > */}
      {/* <div className={styles.imageContainerWrapper}> */}
      {/* <SwapPhoto
            frontPhoto={whiteBrokenPhone}
            backPhoto={whiteFixedPhone}
            frontPhotoAlt="Telefon biały zepsuty"
            backPhotoAlt="Telefon biały naprawiony"
            isInfinity
            isStarted={hasFirstImageAnimation}
            className={styles.imageContainerWrapper}
          /> */}
      {/* <div
              className={clsx(
                styles.imageContainer,
                styles.show,
                hasFirstImageAnimation && styles.serviceAnimationFromIn
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
                hasFirstImageAnimation && styles.serviceAnimationFromOut
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
            </div> */}
      {/* </div> */}
      {/* 
        </ScrollAnimationComponent> */}
      {/* <ScrollAnimationComponent
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
          <h1>Serwis oraz usługi</h1>
          <ul className={clsx(styles.offerList, styles.serviceList)}>
            <ServiceItem
              price="30"
              title="Wymiana gniazd, baterii, aparatów"
              className={styles.serviceListItem}
            /> */}
      {/* <li>Wymiana gniazd, baterii, aparatów</li> */}
      {/* <li>Naprawa głośników, mikrofonów, aparatów w telefonie</li>
            <li>Wymiana gniazd oraz baterii</li>
            <li>Wgrywanie nowego oprogramowania</li>
            <li>Ściąganie simlocków oraz innych blokad</li>
            <li>Czyszczenie telefonów po zalaniu</li>
            <li>Wykonywanie ekspertyzy</li>
            <li>Inne drobne usługi (zgrywanie danych, konfiguracja)</li>
          </ul>
        </ScrollAnimationComponent>
      </div> */}
    </section>
  );
};

export default Service;
