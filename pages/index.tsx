import React from "react";

import Header from "components/Header";
import Service from "components/Service";
import Accessories from "components/Accessories";
import Timers from "components/Timers";
import Map from "components/Map";
import Footer from "components/Footer";
import News, { NewsCmsAttributes } from "components/News";
import client from "tina/__generated__/client";
import About from "components/About";
import PromotionDialog from "components/PromotionDialog";

export type CmsProps = {
  newsAttributes: NewsCmsAttributes;
};

export default function Main(props: CmsProps) {
  const { newsAttributes } = props;

  return (
    <>
      <a href="#main-content" className="visually-hidden">
        Przejdź do głównej treści
      </a>
      <Header hasNews={newsAttributes.hasNews} />
      <PromotionDialog />
      <main id="main-content">
        <About />
        <Service />
        <Accessories />
        <Timers />
        <Map />
        <News attributes={newsAttributes} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  let postResponse;
  try {
    postResponse = await client.queries.pages({
      relativePath: "news.md",
    });
  } catch (err) {
    // swallow errors related to document creation
  }
  return {
    props: {
      newsAttributes: postResponse?.data.pages,
    },
  };
};
