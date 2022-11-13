import Image from "next/image";
import React from "react";

import ctKosciuszkiPhoto from "public/ct_kosciuszki.jpg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.jumbotron} id="home">
        <Image
          src={ctKosciuszkiPhoto}
          className={styles.background}
          alt="Tło strony"
        />
        <div className={styles.jumbotronCard}>
          <div className={styles.jumbotronDetails}>
            <h1 className={styles.jumbotronTitle}>Centrum Telefonii</h1>
            <div className={styles.jumbotronDescription}>
              <p>
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Najwyższa
                </span>{" "}
                jakość
              </p>
              <p>
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Najniższe
                </span>{" "}
                ceny
              </p>
              <p>
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Serwis
                </span>{" "}
                smartfonów
              </p>
              <p>
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Sprzedaż
                </span>{" "}
                akcesorii
              </p>
            </div>
            <div className={styles.jumbotronButtons}>
              <a href="tel:+48 (89)533-71-32">
                {/* <button
                  className={styles.action-button call-button}
                  id="header-call-button"
                >
                  <p>Wycena naprawy?</p>
                  <span className={styles.material-icons}>call</span>
                </button> */}
              </a>

              {/* <button
                className={styles.action-button direction-button is-tablet is-desktop}
                id="header-direction-button"
                data-move-to="#map"
              >
                <p>Jak dojechać</p>
                <span className={styles.material-icons}> place </span>
              </button> */}

              <a href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5">
                {/* <button
                  className={styles.action-button opinion-button}
                  id="header-opinion-button"
                >
                  <p>Wystaw opinie</p>
                  <span className={styles.material-icons}> grade </span>
                </button> */}
              </a>
            </div>
          </div>
        </div>
        <svg
          height="100%"
          width="100%"
          className={styles.foreground}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path fill="#171820" d="M0 0 L20 0 L100 80 L100 100 L0 100 Z" />
        </svg>
      </header>
      {/* <a href="tel:+48 (89)533-71-32">
        <button
          className={styles.action-button call-button floating-button"
          id="floating-call-button"
        >
          <span className={styles.material-icons">call</span>
        </button>
      </a>
      <button
        className={styles.action-button direction-button floating-button"
        id="floating-direction-button"
        data-move-to="#map"
      >
        <span className={styles.material-icons"> place </span>
      </button>
      <a href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5">
        <button
          className={styles.action-button opinion-button floating-button"
          id="floating-opinion-button"
        >
          <span className={styles.material-icons"> grade </span>
        </button>
      </a> */}
    </>
  );
};

export default Header;
