import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Accessories.module.css";

import venusEtuiPhoto from "public/etui_venus.png";
import glass9dPhoto from "public/szklo_9d.png";
import jellyCasePhoto from "public/guma_jelly.png";
import chargerPhoto from "public/ladowarka.png";
import Image from "next/image";

const Accessories: FC = () => {
  return (
    <section
      id="accessories"
      className={clsx(styles.offer, styles.accessories)}
    >
      <div className={styles.offerContainer}>
        <div
          className={clsx(
            styles.offerListContainer
            // , styles.slideAnimationLeft
          )}
          id="accessoriesList"
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
        </div>
        <div
          className={clsx(
            styles.offerImages
            // , styles.slideAnimationRight
          )}
          id="accessories-images"
        >
          <div className={styles.imageContainerWrapper}>
            <div className={clsx(styles.imageContainer, styles.show)}>
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
            <div className={clsx(styles.imageContainer, styles.hide)}>
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
        </div>
      </div>
    </section>
  );
};

export default Accessories;
