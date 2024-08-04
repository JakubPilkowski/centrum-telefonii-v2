import Image from "next/image";
import React, { forwardRef } from "react";

import useNavigate from "hooks/useNavigate";

import ActionButton from "components/ActionButton";

import ctKosciuszkiPhoto from "public/ct_kosciuszki.jpg";

import styles from "./Header.module.css";

const Header = forwardRef<HTMLElement>(function Header(_, ref) {
  const [navigate] = useNavigate();

  const handleNavigate = (id: string) => () => {
    navigate(id);
  };

  return (
    <header className={styles.jumbotron} id="home" ref={ref}>
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
              <ActionButton text="Wycena naprawy?" iconType="call" />
            </a>
            <button onClick={handleNavigate("map")}>
              <ActionButton text="Jak dojechać?" iconType="direction" />
            </button>
            <a href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5">
              <ActionButton text="Wystaw opinie" iconType="opinion" />
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
        <path
          fill="var(--colorBlack)"
          d="M0 0 L15 0 L100 90 L100 100 L0 100 Z"
        />
      </svg>
    </header>
  );
});

export default Header;
