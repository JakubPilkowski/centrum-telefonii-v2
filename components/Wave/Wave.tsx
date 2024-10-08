import clsx from "clsx";
import React, { FC } from "react";

import styles from "./Wave.module.css";

type WaveProps = {
  className?: string;
  isReversed?: boolean;
};

const Wave: FC<WaveProps> = ({ className, isReversed = false }) => {
  return (
    <div className={clsx(styles.WaveWrapper, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={clsx(styles.Wave)}
        aria-hidden="true"
      >
        {isReversed ? (
          <path
            fill="var(--colorPrimary)"
            fillOpacity="1"
            d="M0,192L60,197.3C120,203,240,213,360,208C480,203,600,181,720,160C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        ) : (
          <path
            fill="var(--colorPrimary)"
            fillOpacity="1"
            d="M0,192L60,197.3C120,203,240,213,360,208C480,203,600,181,720,160C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        )}
      </svg>
    </div>
  );
};

export default Wave;
