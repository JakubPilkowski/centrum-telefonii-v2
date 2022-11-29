import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import SwapPhotoProps from "./SwapPhoto.types";

import styles from "./SwapPhoto.module.css";

const SwapPhoto: FC<SwapPhotoProps> = ({
  isStarted,
  frontPhoto,
  frontPhotoAlt,
  backPhoto,
  backPhotoAlt,
  animationDuration,
  delay,
  reverse,
}) => {
  const animationDelayRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const [isAnimationRunning, setAnimationRunning] = useState(false);

  const clearAnimationTimeout = useCallback(() => {
    if (!animationDelayRef.current) return;
    clearTimeout(animationDelayRef.current);
    animationDelayRef.current = null;
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    if (isStarted) {
      animationDelayRef.current = setTimeout(() => {
        setAnimationRunning(true);
      }, delay);
    } else {
      clearAnimationTimeout();
    }
  }, [clearAnimationTimeout, delay, isStarted]);

  useEffect(
    () => () => {
      clearAnimationTimeout();
    },
    [clearAnimationTimeout]
  );

  return (
    <div className={styles.SwapPhotoContainer}>
      <div className={styles.PhotoWrapper}>
        <Image
          src={frontPhoto}
          alt={frontPhotoAlt}
          className={clsx(styles.Photo)}
        />
      </div>
    </div>
  );
};

export default SwapPhoto;
