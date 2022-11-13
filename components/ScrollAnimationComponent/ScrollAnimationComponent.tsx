import clsx from "clsx";
import ScrollComponent, {
  ScrollComponentProps,
} from "components/ScrollComponent";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

type ScrollAnimationComponentProps = Omit<ScrollComponentProps, "onDetect"> & {
  onDetect: (
    window: Window,
    element: HTMLElement,
    distanceFromTop: number
  ) => boolean;
  inClassName: string;
  outClassName?: string;
  onAnimIn?: () => void;
  onAnimOut?: () => void;
};

const defaultFunction = (): void => {};

const ScrollAnimationComponent: FC<ScrollAnimationComponentProps> = ({
  children,
  onDetect,
  inClassName,
  outClassName = "",
  className,
  onAnimIn = defaultFunction,
  onAnimOut = defaultFunction,
  ...props
}) => {
  const ref = useRef<HTMLElement>(null);

  const distanceFromTop = useRef<number | null>(null);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;
    distanceFromTop.current = elem.getBoundingClientRect().top;
  }, []);

  const [isIn, setIn] = useState(false);

  const handleAnimation = useCallback(
    (window: Window) => {
      const elem = ref.current;
      const distance = distanceFromTop.current;
      if (!elem || !distance) return;
      const isElementDetected = onDetect(window, elem, distance);
      console.log(isElementDetected);

      if (!isIn && isElementDetected) {
        setIn(true);
        onAnimIn();
      }

      if (isIn && !isElementDetected) {
        setIn(false);
        onAnimOut();
      }
    },
    [isIn, onAnimIn, onAnimOut, onDetect]
  );

  return (
    <ScrollComponent
      ref={ref}
      onDetect={handleAnimation}
      className={clsx(className, isIn ? inClassName : outClassName)}
      {...props}
    >
      {children}
    </ScrollComponent>
  );
};

export default ScrollAnimationComponent;
