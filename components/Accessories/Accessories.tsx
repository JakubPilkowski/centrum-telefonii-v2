import clsx from "clsx";
import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "./Accessories.module.css";
import { scrollTriggerAnimation } from "utils/animations";
import Accessory from "components/Accessory";
import accessoryItems from "./accessoryItems";
import Wave from "components/Wave";

const Accessories: FC = () => {
  return (
    <section id="accessories" className={clsx(styles.accessories)}>
      <Wave isReversed className={styles.wave} />
      <div className={styles.accessoriesForeground} />
      <div className={styles.accessoriesSection}>
        <h1 className={styles.accessoriesTitle}>Akcesoria</h1>
        <p className={styles.accessoriesDescription}>
          Nasz sklep oferuje szeroki zakres produktów w najniższych cenach
          dzięki czemu zaopatrzysz się w:
        </p>
        <motion.div
          className={styles.accessoriesList}
          {...scrollTriggerAnimation}
        >
          {accessoryItems.map(({ id, ...props }) => (
            <Accessory key={id} {...props} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accessories;
