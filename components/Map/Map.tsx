import React, { FC, useCallback } from "react";
import { motion } from "framer-motion";

import styles from "./Map.module.css";
import clsx from "clsx";
import { variants } from "components/Accessory/variants";

const Map: FC = () => {
  return (
    <section id="map" className={styles.map}>
      <div className={styles.mapContainer}>
        <h1 className={clsx("title", styles.mapTitle)}>Jak dojechać</h1>

        <div className={styles.maps}>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={0}
            className={styles.mapWrapper}
          >
            <header className={styles.mapIframeHeader}>
              <h5 className={styles.mapIframeTitle}>
                Punkt nr 1: ulica Kościuszki 19/2
              </h5>
            </header>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.6821797835114!2d20.494077557566143!3d53.78300233965278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2793305f876e3%3A0x6aeeae6bfa02a819!2sCentrum+Telefonii+s.c.!5e0!3m2!1spl!2spl!4v1557851864282!5m2!1spl!2spl"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
            className={styles.mapWrapper}
          >
            <header className={styles.mapIframeHeader}>
              <h5 className={styles.mapIframeTitle}>
                Punkt nr 2: Plac Pułaskiego 7 lokal 62
              </h5>
            </header>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.5073313268567!2d20.488660815991853!3d53.78045744980634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27932a8723f9f%3A0x1f8d7a896ca9d506!2sCentrum%20Telefonii%20s.c.%20%C5%9Awi%C4%99cicki%20G.%2C%20Gromek-%20Pi%C5%82kowska%20H.E.!5e0!3m2!1spl!2spl!4v1600695864194!5m2!1spl!2spl"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
