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

export default function Main() {
  return (
    <ScrollProvider>
      <Nav />
      <Header />
      <Wrapper type="offer">
        <Service />
        <Accessories />
      </Wrapper>

      <Wrapper type="main">
        <Timers />
        <Map />
      </Wrapper>
      <Footer />
    </ScrollProvider>
  );
}