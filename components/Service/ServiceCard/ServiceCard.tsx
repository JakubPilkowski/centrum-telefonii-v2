import { variants } from "components/Accessory/variants";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";
import Image, { StaticImageData } from "next/image";

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
      custom={index} //Pass the index in the custom prop
      className={styles.ServiceCard}
    >
      <h5 className={styles.ServiceCardTitle}>{title}</h5>
      <div className={styles.ServiceCardImageWrapper}>
        <Image
          src={image}
          width={300}
          height={200}
          alt={imageAlt}
          className={styles.ServiceCardImage}
        />
      </div>
      <h5 className={styles.ServiceCardPrice}>{price}</h5>
      <div className={styles.ServiceCardDescription}>
        {list.map((item) => (
          <p key={item} className={styles.ServiceCardListItem}>
            {item}
          </p>
        ))}
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
