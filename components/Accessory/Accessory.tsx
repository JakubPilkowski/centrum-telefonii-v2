import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./Accessory.module.css";

type AccessoryProps = {
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
      <Image src={image} alt={imageAlt} fill />
      <div>
        <div>
          <span>{icon}</span>
        </div>
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
