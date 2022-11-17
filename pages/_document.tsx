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
            content="Firma telekomunikacyjna zajmująca sie naprawą telefonów oraz sprzedażą akcesorii i
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
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&family=Rosa:ital,wght@0,500;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Ole&display=swap"
            rel="stylesheet"
          ></link>
          <script
            async
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          ></script>
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
