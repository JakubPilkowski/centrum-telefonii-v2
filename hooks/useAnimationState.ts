import { useCallback, useEffect, useRef, useState } from "react";
import { clearTimeout } from "timers";

type Options = {
  isInfinite?: boolean;
  defaultState?: boolean;
};

export default function useAnimationState(delay = 1000, options?: Options) {
  const { isInfinite, defaultState } = options || {
    isInfinite: false,
    defaultState: false,
  };

  const [state, setState] = useState(defaultState);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const handleAnimate = useCallback(() => {
    animationRef.current = setTimeout(() => {
      setState((prvState) => !prvState);
      if (isInfinite) {
        handleAnimate();
      } else {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
        animationRef.current = null;
      }
    }, delay);
  }, [delay, isInfinite]);

  useEffect(() => {
    console.log("effect");

    if (!animationRef.current) {
      handleAnimate();
    }
  }, [state, handleAnimate]);

  return [state];
}
