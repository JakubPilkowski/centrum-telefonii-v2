import clsx from "clsx";
import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "./Accessories.module.css";
import { scrollTriggerAnimation } from "utils/animations";
import accessories from "../accessories";
import Accessory from "components/Accessory";

const Accessories: FC = () => {
  return (
    <section
      id="accessories"
      className={clsx(styles.offer, styles.accessories)}
    >
      <motion.div
        className={clsx(styles.accessoriesList)}
        {...scrollTriggerAnimation}
      >
        {accessories.map(({ id, ...props }) => (
          <Accessory key={id} {...props} />
        ))}
      </motion.div>
    </section>
  );
};

export default Accessories;
