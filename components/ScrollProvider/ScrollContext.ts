import { createContext } from "react";
import { ScrollCallback } from "./ScrollProvider";

type ScrollContextValue = {
  addCallback: (cb: ScrollCallback) => void;
  changeCallback: (cb: ScrollCallback) => void;
  removeCallback: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export default ScrollContext;
