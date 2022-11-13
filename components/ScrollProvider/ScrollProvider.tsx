import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DebouncedFunc } from "lodash";
import throttle from "lodash.throttle";
import ScrollContext from "./ScrollContext";

export type ScrollCallback = {
  id: string;
  cb: (window: Window) => void;
};

type ScrollProviderProps = {
  children: ReactNode;
};

const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
  const scrollRef = useRef<DebouncedFunc<() => void> | null>(null);
  const [callbacks, setCallbacks] = useState<ScrollCallback[]>([]);

  const addCallback = useCallback((newCb: ScrollCallback) => {
    setCallbacks((cbs) => [...cbs, newCb]);
  }, []);

  const changeCallback = useCallback((newCb: ScrollCallback) => {
    setCallbacks((cbs) =>
      cbs.map((cb) => {
        if (cb.id === newCb.id) {
          return newCb;
        }
        return cb;
      })
    );
  }, []);

  const removeCallback = useCallback((id: string) => {
    setCallbacks((cbs) => cbs.filter((cb) => cb.id !== id));
  }, []);

  const onScroll = useCallback(() => {
    callbacks.forEach((callback) => {
      const { cb } = callback;
      cb(window);
    });
  }, [callbacks]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleScroll = useCallback(throttle(onScroll, 15), [onScroll]);

  useEffect(() => {
    scrollRef.current = throttleScroll;
    window.addEventListener("scroll", scrollRef.current, true);

    return () => {
      if (!scrollRef.current) return;
      window.removeEventListener("scroll", scrollRef.current, true);
      scrollRef.current = null;
    };
  }, [throttleScroll, callbacks]);

  const scrollContextValue = useMemo(
    () => ({ addCallback, changeCallback, removeCallback }),
    [addCallback, changeCallback, removeCallback]
  );

  return (
    <ScrollContext.Provider value={scrollContextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
