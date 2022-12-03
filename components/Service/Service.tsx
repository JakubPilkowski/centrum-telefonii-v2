import React, { FC, forwardRef, useCallback, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

import whiteBrokenPhone from "public/phone_white_d.jpg";
import blackBrokenPhone from "public/phone_black_d.jpg";
import whiteFixedPhone from "public/phone_white_r.jpg";
import blackFixedPhone from "public/phone_black_r.jpg";

import styles from "./Service.module.css";
import { scrollTriggerAnimation } from "utils/animations";
import SwapPhoto from "components/SwapPhoto";

const Service = forwardRef<HTMLElement>(function Service(_, ref) {
  return (
    <section
      id="service"
      ref={ref}
      className={clsx(styles.offer, styles.service)}
    >
      <div className={styles.offerContainer}>
        <motion.div
          {...scrollTriggerAnimation}
          className={clsx(styles.offerImages, styles.serviceImages)}
        >
          <SwapPhoto
            frontPhoto={whiteBrokenPhone}
            backPhoto={whiteFixedPhone}
            frontPhotoAlt="Telefon biały zepsuty"
            backPhotoAlt="Telefon biały naprawiony"
            isInfinity
            isStarted={false}
            className={styles.imageContainerWrapper}
          />
          <div className={styles.imageLabelWrapper}>
            <motion.h3
              className={clsx(styles.imageLabel)}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 8,
                },
              }}
            >
              Przed
            </motion.h3>
            <motion.h3
              className={clsx(styles.imageLabel)}
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 8,
                },
              }}
            >
              Po
            </motion.h3>
          </div>
        </motion.div>
        <motion.div
          {...scrollTriggerAnimation}
          className={clsx(
            styles.offerListContainer,
            styles.serviceListContainer
          )}
        >
          <h1>Serwis oraz usługi</h1>
          <ul className={clsx(styles.offerList, styles.serviceList)}>
            <ServiceItem
              price="30"
              title="Wymiana gniazd, baterii, aparatów"
              className={}
            />
            <li>Naprawa głośników, mikrofonów, aparatów w telefonie</li>
            <li>Wymiana gniazd oraz baterii</li>
            <li>Wgrywanie nowego oprogramowania</li>
            <li>Ściąganie simlocków oraz innych blokad</li>
            <li>Czyszczenie telefonów po zalaniu</li>
            <li>Wykonywanie ekspertyzy</li>
            <li>Inne drobne usługi (zgrywanie danych, konfiguracja)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
});

export default Service;
