import React from "react";
import { join } from "path";
import { readFileSync } from "fs";

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

function getPageProps(dir: string, slug: string): Record<string, unknown> {
  const fullPath = join(dir, `${slug}.json`);
  const data = readFileSync(fullPath, "utf8");
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

export async function getStaticProps() {
  const news = getPageProps("content", "news");

  return {
    props: {
      newsAttributes: news,
    },
  };
}
