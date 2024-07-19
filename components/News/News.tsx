import React, { FC, useCallback, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import styles from "./News.module.css";
import slideStyles from "styles/Slide.module.css";
import ScrollAnimationComponent from "components/ScrollAnimationComponent";

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

  const handleDetect = useCallback(
    (window: Window, element: HTMLElement, distanceFromTop: number) => {
      const windowY = window.scrollY + window.innerHeight;
      return windowY > distanceFromTop - 100;
    },
    []
  );

  return hasNews ? (
    <div className={styles.news} id="news">
      <ScrollAnimationComponent
        onDetect={handleDetect}
        className={clsx(slideStyles.slide, slideStyles.slideOut)}
        noReverseAnimation
        inClassName={slideStyles.slideIn}
      >
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
      </ScrollAnimationComponent>
    </div>
  ) : null;
};

export default News;
