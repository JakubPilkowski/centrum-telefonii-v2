import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import clsx from "clsx";

import styles from "./Wrapper.module.css";

type WrapperProps = {
  type: "main" | "offer";
  children: ReactNode;
};

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(function Wrapper(
  { type, children },
  wrapperRef
) {
  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle(wrapperRef, () => ref.current as HTMLDivElement);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      if (isSafari) {
        const wrapperOuter = ref.current;
        if (wrapperOuter) {
          wrapperOuter.classList.add(styles.safari);
        }
      }
    }
  });

  return (
    <div
      className={clsx(styles.wrapperOuter, styles[`${type}WrapperOuter`])}
      ref={ref}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
});

export default Wrapper;
