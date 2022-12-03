import { StaticImageData } from "next/image";

type SwapPhotoProps = {
  frontPhoto: string | StaticImageData;
  frontPhotoAlt: string;
  backPhoto: string | StaticImageData;
  backPhotoAlt: string;
  isInfinity: boolean;
  isStarted: boolean;
  className?: string;
};

export default SwapPhotoProps;
