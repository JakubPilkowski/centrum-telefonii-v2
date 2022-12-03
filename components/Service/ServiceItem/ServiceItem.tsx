import React, { FC } from "react";
import ServiceItemProps from "./ServiceItem.types";

import styles from "./ServiceItem.module.css";
import clsx from "clsx";

const ServiceItem: FC<ServiceItemProps> = ({ price, title }) => {
  return (
    <div className={styles.ServiceItem}>
      <div className={styles.ServiceItemCircle}>
        <p className={styles.ServiceItemCircleText}>
          <b>{price} zł</b>*
        </p>
      </div>
      <p className={styles.ServiceItemTitleWrapper}>
        <span className={clsx("material-icons", styles.ServiceItemIcon)}>
          build
        </span>
        <span className={styles.ServiceItemTitle}>{title}</span>
      </p>
    </div>
  );
};

export default ServiceItem;
