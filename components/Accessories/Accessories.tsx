import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Accessories.module.css";
import Accessory from "components/Accessory";
import accessoryItems from "./accessoryItems";
import Wave from "components/Wave";

const Accessories: FC = () => {
  return (
    <section id="accessories" className={clsx(styles.accessories)}>
      <Wave isReversed className={styles.wave} />
      <div className={styles.accessoriesForeground} />
      <div className={styles.accessoriesSection}>
        <h1 className={clsx("title", styles.accessoriesTitle)}>Akcesoria</h1>
        <div className={styles.accessoriesList}>
          {accessoryItems.map(({ id, ...props }, index) => (
            <Accessory key={id} {...props} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
