import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

import useNavigate from "hooks/useNavigate";

import ActionButton from "components/ActionButton";
import ScrollComponent from "components/ScrollComponent";

import ctKosciuszkiPhoto from "public/ct_kosciuszki.jpg";

import slideStyles from "styles/ButtonSlide.module.css";
import styles from "./Header.module.css";

const Header = () => {
  const [hasFloatingButtons, setFloatingButtons] = useState(false);
  const [navigate] = useNavigate();

  const handleNavigate = (id: string) => () => {
    navigate(id);
  };

  const handleDetect = (window: Window) => {
    if (!hasFloatingButtons && window.scrollY > window.innerHeight / 2) {
      setFloatingButtons(true);
      return;
    }
    if (hasFloatingButtons && window.scrollY < window.innerHeight / 2) {
      setFloatingButtons(false);
    }
  };

  return (
    <>
      <ScrollComponent
        tag="header"
        onDetect={handleDetect}
        className={styles.jumbotron}
        id="home"
      >
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
                <ActionButton text="Wycena naprawy?" type="call" />
              </a>
              <button onClick={handleNavigate("map")}>
                <ActionButton text="Jak dojechać?" type="direction" />
              </button>
              <a href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5">
                <ActionButton text="Wystaw opinie" type="opinion" />
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
      </ScrollComponent>
      <a
        className={clsx(styles.floatingButtonWrapper)}
        href="tel:+48 (89)533-71-32"
      >
        <ActionButton
          type="call"
          isFloating
          className={clsx(
            slideStyles.slide,
            hasFloatingButtons ? slideStyles.slideIn : slideStyles.slideOut
          )}
        />
      </a>
      <button
        className={clsx(styles.floatingButtonWrapper)}
        onClick={handleNavigate("map")}
      >
        <ActionButton
          type="direction"
          isFloating
          className={clsx(
            slideStyles.slide,
            hasFloatingButtons ? slideStyles.slideIn : slideStyles.slideOut
          )}
        />
      </button>
      <a
        className={clsx(styles.floatingButtonWrapper)}
        href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5"
      >
        <ActionButton
          type="opinion"
          isFloating
          className={clsx(
            slideStyles.slide,
            hasFloatingButtons ? slideStyles.slideIn : slideStyles.slideOut
          )}
        />
      </a>
    </>
  );
};

export default Header;
