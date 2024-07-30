import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./News.module.css";
import { scrollTriggerAnimation } from "utils/animations";

export type NewsCmsAttributes = {
  hasNews: boolean;
  news: {
    title: string;
    photo: string;
    description?: string;
    priceBefore: string;
    priceAfter: string;
  };
};

export type NewsProps = {
  attributes: NewsCmsAttributes;
};

const News: FC<NewsProps> = ({ attributes }) => {
  const { hasNews, news } = attributes;

  return hasNews ? (
    <section className={styles.news} id="news">
      <motion.div {...scrollTriggerAnimation}>
        <h3 className={styles.newsTitle}>{news.title}</h3>
        <div className={styles.newsPhotoWrapper}>
          <Image
            src={news.photo}
            className={styles.newsPhoto}
            alt="News photo"
            fill
          />
        </div>
        <h4 className={styles.newsSubtitle}>{news.description}</h4>
        <h4 className={styles.newsPrice}>
          <span className={styles.newsPriceAfter}>{news.priceAfter}zł</span>
          <span className={styles.newsPriceBefore}>{news.priceBefore}zł</span>
        </h4>
      </motion.div>
    </section>
  ) : null;
};

export default News;
