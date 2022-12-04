import React, { forwardRef } from "react";
import clsx from "clsx";

import whiteBrokenPhone from "public/phone_white_d.jpg";
import blackBrokenPhone from "public/phone_black_d.jpg";
import whiteFixedPhone from "public/phone_white_r.jpg";
import blackFixedPhone from "public/phone_black_r.jpg";

import styles from "./Service.module.css";
import SwapPhoto from "components/SwapPhoto";
import ServiceItem from "./ServiceItem";
import ActionButton from "components/ActionButton";

const Service = forwardRef<HTMLElement>(function Service(_, ref) {
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
          <ActionButton
            text="Wycena naprawy?"
            iconType="call"
            type="a"
            href="tel:+48 (89)533-71-32"
            className={styles.serviceCallButton}
          />
        </div>
        <div className={styles.serviceSectionItem}>
          <SwapPhoto
            frontPhoto={whiteBrokenPhone}
            backPhoto={whiteFixedPhone}
            frontPhotoAlt="Telefon biały zepsuty"
            backPhotoAlt="Telefon biały naprawiony"
            isInfinity
            isStarted={false}
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
            isStarted={false}
            className={styles.serviceImageContainer}
          />
        </div>
      </div>
    </section>
  );
});

export default Service;
