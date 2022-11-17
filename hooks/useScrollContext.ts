import { useContext } from "react";

import ScrollContext from "components/ScrollProvider/ScrollContext";

export default function useScrollContext() {
  const scrollContext = useContext(ScrollContext);

  if (!scrollContext) {
    throw new Error(
      "Null scroll context value. You probably forgot to implement ScrollProvider"
    );
  }

  return scrollContext;
}
