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
          <div className={styles.imageContainerWrapper}>
            <motion.div
              className={clsx(styles.imageContainer)}
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
            </motion.div>
            <motion.div
              className={clsx(styles.imageContainer)}
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
            </motion.div>
          </div>
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
        </motion.div>
      </div>
    </section>
  );
});

export default Service;
