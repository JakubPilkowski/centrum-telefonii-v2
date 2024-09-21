import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import Image from "next/image";

import SwapPhotoProps from "./SwapPhoto.types";

import styles from "./SwapPhoto.module.css";
import useAnimationState from "hooks/useAnimationState";

const SwapPhoto: FC<SwapPhotoProps> = ({
  isStarted,
  frontPhoto,
  frontPhotoAlt,
  backPhoto,
  backPhotoAlt,
  isInfinity,
  className,
}) => {
  return (
    <div className={clsx(styles.SwapPhotoContainer, className)}>
      <div
        className={clsx(
          styles.PhotoWrapper,
          styles.PhotoWrapperFront,
          isStarted && styles.PhotoFrontAnimation,
          isInfinity
            ? styles.PhotoAnimationIterationInfinity
            : styles.PhotoAnimationIterationOnce
        )}
      >
        <Image
          src={frontPhoto}
          alt={frontPhotoAlt}
          className={clsx(styles.Photo)}
        />
      </div>

      <div
        className={clsx(
          styles.PhotoWrapper,
          styles.PhotoWrapperBack,
          isStarted && styles.PhotoBackAnimation,
          isInfinity
            ? styles.PhotoAnimationIterationInfinity
            : styles.PhotoAnimationIterationOnce
        )}
      >
        <Image
          src={backPhoto}
          alt={backPhotoAlt}
          className={clsx(styles.Photo)}
        />
      </div>
    </div>
  );
};

export default SwapPhoto;
