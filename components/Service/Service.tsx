import React, { FC } from "react";
import clsx from "clsx";

import styles from "./Service.module.css";

const Service: FC = () => {
  return (
    <section id="service" className={styles.offer}>
      <div className={styles.offerContainer}>
        <div
          className={clsx(
            styles.offerImages,
            styles.serviceImages
            // styles.slideAnimationLeft
          )}
          id="serviceImages"
        >
          <div className={styles.imageContainerWrapper}>
            <div className={clsx(styles.imageContainer, styles.show)}>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                {/* <img
                  src="./images/phone_white_d.jpg"
                  className={styles.img-first"
                  alt="Telefon biały zepsuty"
                /> */}
              </div>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                {/* <img
                  src="./images/phone_black_d.jpg"
                  className={styles.img-first"
                  alt="Telefony czarny zepsuty"
                /> */}
              </div>
            </div>
            <div className={clsx(styles.imageContainer, styles.hide)}>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                {/* <img
                  src="./images/phone_white_r.jpg"
                  className={styles.img-first"
                  alt="Telefon biały zepsuty"
                /> */}
              </div>
              <div
                className={clsx(
                  styles.offerImageWrapper,
                  styles.serviceImageWrapper
                )}
              >
                {/* <img
                  src="./images/phone_black_r.jpg"
                  className={styles.img-first"
                  alt="Telefony czarny zepsuty"
                /> */}
              </div>
            </div>
          </div>
          <h3 className={styles.imageLabel}>Przed</h3>
        </div>
        <div
          className={clsx(
            styles.offerListContainer,
            styles.serviceListContainer
            // styles.slideAnimationRight
          )}
          id="serviceList"
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
        </div>
      </div>
    </section>
  );
};

export default Service;
