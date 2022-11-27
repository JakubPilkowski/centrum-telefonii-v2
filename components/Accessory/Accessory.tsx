import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./Accessory.module.css";
import clsx from "clsx";

export type AccessoryProps = {
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
      <div className={styles.accessoryImageWrapperOuter}>
        <div className={styles.accessoryImageWrapperInner}>
          <Image src={image} alt={imageAlt} className={styles.accessoryImage} />
        </div>
      </div>
      <div className={styles.accessoryFooter}>
        <div className={styles.accessoryIconWrapper}>
          <span className={clsx("material-icons", styles.accessoryIcon)}>
            {icon}
          </span>
        </div>
        <div className={styles.accessoryTextWrapper}>
          <p className={styles.accessoryText}>{name}</p>
          <p className={styles.accessoryText}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
