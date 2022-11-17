import {
  createElement,
  forwardRef,
  HTMLAttributes,
  ReactHTML,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { nanoid } from "nanoid";

import useScrollContext from "hooks/useScrollContext";

export type ScrollComponentProps = HTMLAttributes<any> & {
  tag?: keyof ReactHTML;
  children?: ReactNode;
  onDetect: (window: Window) => void;
};

const ScrollComponent = forwardRef<HTMLElement, ScrollComponentProps>(
  ({ tag = "div", onDetect, children, ...props }, ref) => {
    const elementRef = useRef<HTMLElement>(null);
    const callbackId = useRef<string | null>(null);
    useImperativeHandle(ref, () => elementRef.current as HTMLElement);

    const { addCallback, changeCallback, removeCallback } = useScrollContext();
    useEffect(
      () => {
        return () => {
          const cbId = callbackId.current;
          if (!cbId) return;
        };
        // removeCallback(cbId);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    useEffect(() => {
      const cbId = callbackId.current;
      if (!cbId) {
        const id = nanoid();
        addCallback({ id, cb: onDetect });
        callbackId.current = id;
      } else {
        changeCallback({ id: cbId, cb: onDetect });
      }
      onDetect(window);
    }, [addCallback, changeCallback, onDetect]);

    return createElement(tag, { ...props, ref: elementRef }, children);
  }
);

ScrollComponent.displayName = "ScrollComponent";

export default ScrollComponent;
