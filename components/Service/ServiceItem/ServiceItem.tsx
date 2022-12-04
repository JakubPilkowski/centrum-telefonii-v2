import React, { FC } from "react";
import clsx from "clsx";

import ServiceItemProps from "./ServiceItem.types";
import styles from "./ServiceItem.module.css";

const ServiceItem: FC<ServiceItemProps> = ({ price, title, className }) => {
  return (
    <div className={clsx(styles.ServiceItem, className)}>
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
