import React, { FC, ReactNode } from "react";

import clsx from "clsx";

import styles from "./Wrapper.module.css";

type WrapperProps = {
  type: "main" | "offer";
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ type, children }) => {
  return (
    <div className={clsx(styles.wrapperOuter, styles[`${type}WrapperOuter`])}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Wrapper;
