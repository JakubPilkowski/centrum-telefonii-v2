import { StaticImageData } from "next/image";

type SwapPhotoProps = {
  frontPhoto: string | StaticImageData;
  frontPhotoAlt: string;
  backPhoto: string | StaticImageData;
  backPhotoAlt: string;
  delay: number;
  reverse: boolean;
  animationDuration: number;
  isStarted: boolean;
  className?: string;
};

export default SwapPhotoProps;
