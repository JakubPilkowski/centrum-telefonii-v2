import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./Accessory.module.css";
import clsx from "clsx";

export type AccessoryProps = {
  id: string;
  image: string | StaticImageData;
  imageAlt: string;
  icon: string;
  name: string;
  price: string;
};

const Accessory: FC<AccessoryProps> = ({
  image,
  imageAlt,
  icon,
  name,
  price,
}) => {
  return (
    <div className={styles.accessory}>
      <div className={styles.accessoryImageWrapper}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={styles.accessoryImage}
        />
      </div>
      <div className={styles.accessoryFooter}>
        <div className={styles.accessoryIconWrapper}>
          <span className={clsx("material-icons", styles.accessoryIcon)}>
            {icon}
          </span>
        </div>
        <div className={styles.accessoryTextWrapper}>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
