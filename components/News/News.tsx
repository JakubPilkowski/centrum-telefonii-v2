import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

import styles from "./News.module.css";
import { scrollTriggerAnimation } from "utils/animations";
import clsx from "clsx";

export type NewsCmsAttributes = {
  hasNews: boolean;
  title: string;
  photo: string;
  body: TinaMarkdownContent;
  // priceBefore: string;
  // priceAfter: string;
};

export type NewsProps = {
  attributes: NewsCmsAttributes;
};

const News: FC<NewsProps> = ({ attributes }) => {
  const { hasNews, title, photo, body } = attributes;

  return hasNews ? (
    <section className={styles.news} id="news">
      <motion.div {...scrollTriggerAnimation}>
        <h1 className={clsx("title", styles.newsTitle)}>{title}</h1>
        <div className={styles.newsPhotoWrapper}>
          <Image
            src={photo}
            className={styles.newsPhoto}
            alt="News photo"
            fill
          />
        </div>
        <div className={styles.newsDescription}>
          <TinaMarkdown
            // className={styles.newsbody}
            content={body}
          />
        </div>
        {/* <h3 className={styles.newsSubtitle}>{news.description}</h3>
        <h3 className={styles.newsPrice}>
          <span className={styles.newsPriceAfter}>{news.priceAfter}zł</span>
          <span className={styles.newsPriceBefore}>{news.priceBefore}zł</span>
        </h3> */}
      </motion.div>
    </section>
  ) : null;
};

export default News;
