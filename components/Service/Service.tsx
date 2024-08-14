import React, { forwardRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import phoneFixing from "public/phone_fixing.jpg";
import screenFixing from "public/screen_fixing.jpg";
import slotFixing from "public/slot_fixing.jpg";
import cameraFixing from "public/camera_fixing.jpg";

import styles from "./Service.module.css";
import ActionButton from "components/ActionButton";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = forwardRef<HTMLElement>(function Service(_, ref) {
  return (
    <section id="service" className={clsx(styles.service)}>
      <div className={styles.serviceMain}>
        <div className={clsx(styles.serviceContainer)}>
          <div className={styles.firstSectionContainer}>
            <div className={styles.serviceSectionItem}>
              <h2 className={styles.serviceTitle}>Czym się zajmujemy?</h2>
              <p>
                Specjalizujemy się w naprawie telefonów komórkowych, smartfonów
                oraz urządzeń elektrycznych takich jak komputery, słuchawki,
                aparaty.
              </p>
              <p>Każdą usługę w naszej firmie cechuje:</p>
              <div className={styles.serviceAdvantagesContainer}>
                <div className={styles.serviceAdvantageWrapper}>
                  <span
                    className={clsx(
                      "material-icons",
                      styles.serviceAdvantageIcon
                    )}
                  >
                    attach_money
                  </span>
                  <p className={styles.serviceAdvantageText}>
                    najniższa ceny na rynku
                  </p>
                </div>
                <div className={styles.serviceAdvantageWrapper}>
                  <span
                    className={clsx(
                      "material-icons",
                      styles.serviceAdvantageIcon
                    )}
                  >
                    access_time
                  </span>
                  <p className={styles.serviceAdvantageText}>
                    krótki czas naprawy
                  </p>
                </div>
                <div className={styles.serviceAdvantageWrapper}>
                  <span
                    className={clsx(
                      "material-icons",
                      styles.serviceAdvantageIcon
                    )}
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
            {/* TODO: add iconify icons */}
          </div>
        </div>
      </div>
      <div className={styles.contentDivider}></div>
      <div className={styles.serviceContainer}>
        <div className={styles.secondSectionContainer}>
          <div className={styles.serviceSectionItem}>
            <h1 className={styles.serviceTitle}>Serwis oraz usługi</h1>
            <motion.div className={styles.serviceList}>
              <ServiceCard
                title="Wymiana"
                price="30 zł*"
                index={0}
                image={slotFixing}
                imageAlt=""
                list={["gniazd", "baterii", "aparatów"]}
              />
              <ServiceCard
                title="Wymiana"
                price="100 zł*"
                index={1}
                image={screenFixing}
                imageAlt=""
                list={["ekranów", "modułów"]}
              />
              <ServiceCard
                title="Naprawa"
                price="30 zł*"
                index={2}
                image={cameraFixing}
                imageAlt=""
                list={["głośników", "mikrofonów", "aparatów w telefonie"]}
              />
              <ServiceCard
                title="Inne"
                price="30 zł*"
                index={3}
                image={phoneFixing}
                imageAlt=""
                list={[
                  "wgrywanie nowego oprogramowania",
                  "ściąganie simlocków, hasła redmi oraz google",
                  "czyszczenie telefonów po zalaniu",
                  "drobne usługi (zgrywanie danych, konfiguracja)",
                ]}
              />
            </motion.div>
            <p>* - Cena minimalna</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Service;
