import React from "react";

import Header from "components/Header";
import Nav from "components/Nav";
import Service from "components/Service";
import Wrapper from "components/Wrapper";
import Accessories from "components/Accessories";
import Timers from "components/Timers";
import Map from "components/Map";
import Footer from "components/Footer";
import News, { NewsCmsAttributes } from "components/News";
import client from "tina/__generated__/client";
import { useAnimate, useInView } from "framer-motion";
import Actions from "components/Actions";

export type CmsProps = {
  newsAttributes: NewsCmsAttributes;
};

export default function Main(props: CmsProps) {
  const { newsAttributes } = props;

  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.5 });

  const areFloatingActionsVisible = !isInView;

  return (
    <>
      <Nav hasNews={newsAttributes.hasNews} />
      <Header ref={scope} />
      <Actions isVisible={areFloatingActionsVisible} />
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
    </>
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
