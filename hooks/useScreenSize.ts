import { useState } from "react";

type Dimension = {
  x: number;
  y: number;
};

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState<Dimension | null>();
}
