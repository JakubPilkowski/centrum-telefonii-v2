import clsx from "clsx";
import React, { FC } from "react";

import Accessory from "components/Accessory";

import styles from "./Accessories.module.css";
import accessoryItems from "./accessoryItems";

const Accessories: FC = () => {
  return (
    <section
      id="accessories"
      className={clsx(styles.offer, styles.accessories)}
    >
      <div className={styles.accessoriesList}>
        {accessoryItems.map(({ id, ...props }) => (
          <Accessory key={id} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Accessories;
