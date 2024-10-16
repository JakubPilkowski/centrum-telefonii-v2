import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Centrum Telefonii s.c. - Naprawa Telefonów Olsztyn. Akcesoria Do
          telefonów.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
