import clsx from "clsx";
import React, { FC, useEffect } from "react";

import styles from "./Accessories.module.css";
import Accessory from "components/Accessory";
import accessoryItems from "./accessoryItems";
import Wave from "components/Wave";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const Accessories: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1.5, playOnInit: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      autoScroll?.play();
    }
  }, [emblaApi]);

  return (
    <section id="accessories" className={clsx(styles.accessories)}>
      <Wave isReversed className={styles.wave} />
      <div className={styles.accessoriesForeground} />
      <div className={styles.accessoriesSection}>
        <h1 className={clsx("title", styles.accessoriesTitle)}>Akcesoria</h1>
        <div
          className={clsx(styles.embla, styles.accessoriesList)}
          ref={emblaRef}
        >
          <div className={clsx(styles.emblaContainer)}>
            {accessoryItems.map(({ id, ...props }, index) => (
              <Accessory
                key={id}
                {...props}
                className={clsx(styles.emblaSlide)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
