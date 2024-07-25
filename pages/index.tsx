import React from "react";

import Header from "components/Header";
import Nav from "components/Nav";
import Service from "components/Service";
import Wrapper from "components/Wrapper";
import Accessories from "components/Accessories";
import Timers from "components/Timers";
import Map from "components/Map";
import Footer from "components/Footer";
import ScrollProvider from "components/ScrollProvider";
import News, { NewsCmsAttributes } from "components/News";
import client from "tina/__generated__/client";

export type CmsProps = {
  newsAttributes: NewsCmsAttributes;
};

export default function Main(props: CmsProps) {
  const { newsAttributes } = props;
  return (
    <ScrollProvider>
      <Nav hasNews={newsAttributes.hasNews} />
      <Header />
      <Wrapper type="offer">
        <Service />
        <Accessories />
      </Wrapper>
      <Wrapper type="main">
        <Timers />
        <Map />
        <News attributes={newsAttributes} />
      </Wrapper>
      <Footer />
    </ScrollProvider>
  );
}

export const getStaticProps = async () => {
  let postResponse;
  try {
    postResponse = await client.queries.pages({
      relativePath: "news.json",
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
