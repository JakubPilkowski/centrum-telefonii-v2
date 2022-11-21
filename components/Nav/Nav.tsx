import React, { FC, useCallback, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";

import useNavigate from "hooks/useNavigate";

import ScrollAnimationComponent from "components/ScrollAnimationComponent";

import brandImage from "public/ct_icon_white.png";

import styles from "./Nav.module.css";

type NavProps = {
  hasNews: boolean;
};

const Nav: FC<NavProps> = ({ hasNews }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [navigate] = useNavigate();

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNavigate = (id: string) => () => {
    navigate(id);
    handleMenuClose();
  };

  const handleDetect = useCallback((window: Window) => {
    return window.scrollY >= 50;
  }, []);

  return (
    <>
      <ScrollAnimationComponent
        tag="nav"
        className={styles.nav}
        inClassName={styles.navBackground}
        onDetect={handleDetect}
      >
        <div className={styles.navMain}>
          <button className={styles.navBrand} onClick={handleNavigate("home")}>
            <div className={styles.brandImageContainer}>
              <Image
                src={brandImage}
                alt="Ikona aplikacji"
                className={styles.brandImage}
              />
            </div>
            <div className={styles.brandBell}></div>

            <h2 className={styles.brandName}>
              Centrum <br /> Telefonii
            </h2>
          </button>
        </div>
        {/* is-desktop */}
        <div className={styles.navLinks}>
          <button
            onClick={handleNavigate("service")}
            className={styles.navLink}
          >
            Oferta
          </button>
          <button onClick={handleNavigate("map")} className={styles.navLink}>
            Jak dojechać
          </button>
          {hasNews && (
            <button onClick={handleNavigate("news")} className={styles.navLink}>
              Aktualności
            </button>
          )}
          <button onClick={handleNavigate("footer")} className={styles.navLink}>
            Kontakt
          </button>
        </div>
        {/* is-mobile is-tablet */}
        <button className={styles.hamburgerIcon} onClick={handleMenuOpen}>
          <div className={styles.hamburgerBell}></div>
          <div className={styles.hamburgerBell}></div>
          <div className={styles.hamburgerBell}></div>
        </button>
      </ScrollAnimationComponent>
      {/*  is-mobile is-tablet */}
      <CSSTransition
        in={isMenuOpen}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: styles.menuOpenStart,
          enterActive: styles.menuOpening,
          enterDone: styles.menuOpenEnd,
          exit: styles.menuCloseStart,
          exitActive: styles.menuClosing,
          exitDone: styles.menuCloseEnd,
        }}
      >
        <div className={styles.hamburgerMenu}>
          <div className={styles.hamburgerContainer}>
            <div className={styles.hamburgerHeader}>
              <button
                className={styles.navBrand}
                onClick={handleNavigate("home")}
              >
                <div className={styles.brandImageContainer}>
                  <Image
                    src={brandImage}
                    alt="Ikona aplikacji"
                    className={styles.brandImage}
                  />
                </div>
                <div className={styles.brandBell}></div>
                <h2 className={styles.brandName}>
                  Centrum <br /> Telefonii
                </h2>
              </button>
              <button
                className={styles.hamburgerClose}
                onClick={handleMenuClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  id="vector"
                >
                  <path
                    id="path"
                    d="M 19 6.41 L 17.59 5 L 12 10.59 L 6.41 5 L 5 6.41 L 10.59 12 L 5 17.59 L 6.41 19 L 12 13.41 L 17.59 19 L 19 17.59 L 13.41 12 Z"
                    fill="var(--colorWhite)"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={handleNavigate("service")}
              className={styles.hamburgerItem}
            >
              Oferta
            </button>
            <button
              onClick={handleNavigate("map")}
              className={styles.hamburgerItem}
            >
              Jak dojechać
            </button>
            {hasNews && (
              <button
                onClick={handleNavigate("news")}
                className={styles.hamburgerItem}
              >
                Aktualności
              </button>
            )}
            <button
              onClick={handleNavigate("footer")}
              className={styles.hamburgerItem}
            >
              Kontakt
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Nav;
