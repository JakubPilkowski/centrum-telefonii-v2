import React, { FC, useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

import styles from "./Accessory.module.css";
import { variants } from "./variants";

export type AccessoryProps = {
  image: string | StaticImageData;
  imageAlt: string;
  icon: string;
  name: string;
  price: string;
  index: number;
  className: string;
};

// TODO: Carousel for accessories

const Accessory: FC<AccessoryProps> = ({
  image,
  imageAlt,
  icon,
  name,
  price,
  index,
  className,
}) => {
  return (
    <div
      // variants={variants}
      // initial="initial"
      // whileInView="animate"
      // viewport={{
      //   once: true,
      // }}
      // custom={index}
      className={clsx(styles.accessory, className)}
    >
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
          <p className={styles.accessoryTextName}>{name}</p>
          <p className={styles.accessoryTextPrice}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
