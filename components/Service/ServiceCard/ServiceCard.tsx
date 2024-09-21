import { variants } from "components/Accessory/variants";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify-icon/react";

export default function ServiceCard({
  title,
  image,
  imageAlt,
  list,
  price,
  index,
}: Props) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className={styles.ServiceCard}
    >
      <div className={styles.ServiceCardImageOuter}>
        <div className={styles.ServiceCardImageInner}>
          <Image
            src={image}
            width={300}
            height={280}
            alt={imageAlt}
            className={styles.ServiceCardImage}
          />
        </div>
        <div className={styles.ServiceCardImageIcon}>
          <Icon icon="mdi:auto-fix" />
        </div>
        <h5 className={styles.ServiceCardTitle}>{title}</h5>
      </div>
      <h5 className={styles.ServiceCardPrice}>{price}</h5>
      <div className={styles.ServiceCardDescription}>
        <ul>
          {list.map((item) => (
            <li key={item}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

type Props = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  list: string[];
  price: string;
  index: number;
};
