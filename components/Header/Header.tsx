import React from "react";

import useNavigate from "hooks/useNavigate";

import ActionButton from "components/ActionButton";

import styles from "./Header.module.css";
import Wave from "components/Wave";
import Nav from "components/Nav";
import Actions from "components/Actions";
import { useAnimate, useInView } from "framer-motion";

const Header = ({ hasNews }: Props) => {
  const [navigate] = useNavigate();
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.5 });

  const areFloatingActionsVisible = !isInView;

  const handleNavigate = (id: string) => () => {
    navigate(id);
  };

  return (
    <header>
      <Nav hasNews={hasNews} />
      <div className={styles.jumbotron} id="home" ref={scope}>
        <div className={styles.jumbotronCard}>
          <div className={styles.jumbotronDetails}>
            <h1 className={styles.jumbotronTitle}>Centrum Telefonii</h1>
            <div className={styles.jumbotronDescription}>
              <p className="h3">
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Najwyższa
                </span>{" "}
                jakość
              </p>
              <p className="h3">
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Najniższe
                </span>{" "}
                ceny
              </p>
              <p className="h3">
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Serwis
                </span>{" "}
                smartfonów
              </p>
              <p className="h3">
                <span className={styles.jumbotronDescriptionBounceSpan}>
                  Sprzedaż
                </span>{" "}
                akcesorii
              </p>
            </div>
            <div className={styles.jumbotronButtons}>
              <ActionButton
                text="Wycena naprawy"
                component="a"
                href="tel:+48 (89)533-71-32"
                iconType="call"
              />
              <ActionButton
                text="Dojazd"
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
      </div>
      <Actions isVisible={areFloatingActionsVisible} />
    </header>
  );
};

type Props = {
  hasNews: boolean;
};

export default Header;
