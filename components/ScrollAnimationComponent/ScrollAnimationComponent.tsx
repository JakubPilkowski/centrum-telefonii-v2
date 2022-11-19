import clsx from "clsx";
import ScrollComponent, {
  ScrollComponentProps,
} from "components/ScrollComponent";
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ScrollAnimationComponentProps = Omit<ScrollComponentProps, "onDetect"> & {
  onDetect: (
    window: Window,
    element: HTMLElement,
    distanceFromTop: number
  ) => boolean;
  inClassName: string;
  outClassName?: string;
  noReverseAnimation?: boolean;
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
  noReverseAnimation = false,
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
      if (!elem || typeof distance !== "number") return;
      const isElementDetected = onDetect(window, elem, distance);

      if (!isIn && isElementDetected) {
        setIn(true);
        onAnimIn();
      }

      if (isIn && !isElementDetected && !noReverseAnimation) {
        setIn(false);
        onAnimOut();
      }
    },
    [isIn, onAnimIn, onAnimOut, onDetect, noReverseAnimation]
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
