import React from "react";
import type { AppProps } from "next/app";

import "styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
