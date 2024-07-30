import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import venusEtuiPhoto from "public/etui_venus.png";
import glass9dPhoto from "public/szklo_9d.png";
import jellyCasePhoto from "public/guma_jelly.png";
import chargerPhoto from "public/ladowarka.png";

import styles from "./Accessories.module.css";
import { scrollTriggerAnimation } from "utils/animations";

const Accessories: FC = () => {
  return (
    <section
      id="accessories"
      className={clsx(styles.offer, styles.accessories)}
    >
      <div className={clsx(styles.offerContainer)}>
        <motion.div
          className={clsx(styles.offerListContainer)}
          {...scrollTriggerAnimation}
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
        </motion.div>
        <motion.div
          className={clsx(styles.offerImages)}
          {...scrollTriggerAnimation}
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accessories;
