import React, { forwardRef } from "react";

import useNavigate from "hooks/useNavigate";

import ActionButton from "components/ActionButton";

import styles from "./Header.module.css";
import Wave from "components/Wave";

const Header = forwardRef<HTMLElement>(function Header(_, ref) {
  const [navigate] = useNavigate();

  const handleNavigate = (id: string) => () => {
    navigate(id);
  };

  return (
    <header className={styles.jumbotron} id="home" ref={ref}>
      <div className={styles.jumbotronCard}>
        <div className={styles.jumbotronDetails}>
          <h1 className={styles.jumbotronTitle}>Centrum Telefonii</h1>
          <div className={styles.jumbotronDescription}>
            <h3>
              <span className={styles.jumbotronDescriptionBounceSpan}>
                Najwyższa
              </span>{" "}
              jakość
            </h3>
            <h3>
              <span className={styles.jumbotronDescriptionBounceSpan}>
                Najniższe
              </span>{" "}
              ceny
            </h3>
            <h3>
              <span className={styles.jumbotronDescriptionBounceSpan}>
                Serwis
              </span>{" "}
              smartfonów
            </h3>
            <h3>
              <span className={styles.jumbotronDescriptionBounceSpan}>
                Sprzedaż
              </span>{" "}
              akcesorii
            </h3>
          </div>
          <div className={styles.jumbotronButtons}>
            <ActionButton
              text="Wycena naprawy?"
              component="a"
              href="tel:+48 (89)533-71-32"
              iconType="call"
            />
            <ActionButton
              text="Jak dojechać?"
              component="button"
              onClick={handleNavigate("map")}
              iconType="direction"
            />
            <ActionButton
              text="Wystaw opinie"
              component="a"
              iconType="opinion"
              href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5"
            />
          </div>
        </div>
      </div>
      <div className={styles.wave}>
        <Wave />
      </div>
    </header>
  );
});

export default Header;
