import React, { FC, useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import styles from "./Accessory.module.css";
import slideStyles from "styles/Slide.module.css";
import ScrollAnimationComponent from "components/ScrollAnimationComponent";

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
  const [hasAccessoriesAnimation, setAccessoriesAnimation] = useState(false);

  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop - element.offsetHeight / 2;
    },
    []
  );

  const handleServiceAnimation = useCallback(
    () => setAccessoriesAnimation(true),
    []
  );
  return (
    <ScrollAnimationComponent
      onDetect={handleDetect}
      className={clsx(
        styles.accessory,
        slideStyles.slide,
        slideStyles.slideOut
      )}
      noReverseAnimation
      onAnimIn={handleServiceAnimation}
      inClassName={slideStyles.slideIn}
    >
      <div className={styles.accessory}>
        <div className={styles.accessoryImageWrapperOuter}>
          <div className={styles.accessoryImageWrapperInner}>
            <Image
              src={image}
              alt={imageAlt}
              className={styles.accessoryImage}
            />
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
    </ScrollAnimationComponent>
  );
};

export default Accessory;
