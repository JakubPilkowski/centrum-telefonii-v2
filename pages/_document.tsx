/* eslint-disable @next/next/google-font-display */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head
          title="Centrum Telefonii s.c. - Naprawa Telefonów Olsztyn. Akcesoria Do
            telefonów."
        >
          <meta
            name="description"
            content="Firma telekomunikacyjna zajmująca się naprawą telefonów oraz sprzedażą akcesorii i
                                      telefonów komórkowych. Jesteśmy najdłużej działającą firmą w Olsztynie."
          />
          <meta
            name="keywords"
            content="telefony, akcesoria, serwis, olsztyn, naprawa, centrum, telefonii"
          />
          <meta name="author" content="Jakub Piłkowski" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="icon" type="image/png" href="images/ct_icon_orange.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Archivo+Black|Judson:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Quicksand:300,500"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
