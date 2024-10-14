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
  photoDescription: string;
  body: TinaMarkdownContent;
};

export type NewsProps = {
  attributes: NewsCmsAttributes;
};

const News: FC<NewsProps> = ({ attributes }) => {
  const { hasNews, title, photo, photoDescription, body } = attributes;

  return hasNews ? (
    <section className={styles.news} id="news" aria-labelledby="news-title">
      <motion.div {...scrollTriggerAnimation}>
        <h1 id="news-title" className={clsx("title", styles.newsTitle)}>
          {title}
        </h1>
        <div className={styles.newsPhotoWrapper}>
          <Image
            src={photo}
            className={styles.newsPhoto}
            alt={photoDescription}
            fill
          />
        </div>
        <div className={styles.newsDescription}>
          <TinaMarkdown content={body} />
        </div>
      </motion.div>
    </section>
  ) : null;
};

export default News;
