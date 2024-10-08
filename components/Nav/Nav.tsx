import React, { FC, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";

import useNavigate from "hooks/useNavigate";

import brandImage from "public/ct_icon_white.png";

import styles from "./Nav.module.css";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";

type NavProps = {
  hasNews: boolean;
};

const Nav: FC<NavProps> = ({ hasNews }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [navigate] = useNavigate();
  const { scrollY } = useScroll();

  //@ts-ignore
  useMotionValueEvent(scrollY, "renderRequest", (latest) => {
    if (latest > 50) {
      ref.current?.classList.add(styles.navBackground);
    } else {
      ref.current?.classList.remove(styles.navBackground);
    }
  });

  const handleMenuOpen = () => {
    setMenuOpen(true);
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    htmlElement.style.overflow = "hidden";
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    htmlElement.style.overflow = "auto";
    // document.body.style.overflow = "auto";
  };

  const handleNavigate = (id: string) => () => {
    navigate(id);
    handleMenuClose();
  };

  return (
    <>
      <nav
        className={styles.nav}
        ref={ref}
        aria-labelledby="primary-navigation"
      >
        <span id="primary-navigation" className="visually-hidden">
          Nawigacja główna
        </span>
        <div className={styles.navMain}>
          <button
            className={styles.navBrand}
            onClick={handleNavigate("home")}
            aria-label="Przejdź do strony głównej"
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
        </div>
        {/* is-desktop */}
        <div className={styles.navLinks}>
          <button
            onClick={handleNavigate("service")}
            className={styles.navLink}
            aria-label="Przejdź do sekcji serwis"
          >
            Serwis
          </button>
          <button
            onClick={handleNavigate("accessories")}
            className={styles.navLink}
            aria-label="Przejdź do sekcji akcesoria"
          >
            Akcesoria
          </button>
          <button
            onClick={handleNavigate("map")}
            className={styles.navLink}
            aria-label="Przejdź do sekcji dojazd"
          >
            Dojazd
          </button>
          {hasNews && (
            <button
              onClick={handleNavigate("news")}
              className={styles.navLink}
              aria-label="Przejdź do sekcji aktualności"
            >
              Aktualności
            </button>
          )}
          <button
            onClick={handleNavigate("footer")}
            className={styles.navLink}
            aria-label="Przejdź do sekcji kontakt"
          >
            Kontakt
          </button>
        </div>
        {/* is-mobile is-tablet */}
        <button
          className={styles.hamburgerIcon}
          onClick={handleMenuOpen}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          <div className={styles.hamburgerBell}></div>
          <div className={styles.hamburgerBell}></div>
          <div className={styles.hamburgerBell}></div>
        </button>
      </nav>
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
                aria-label="Przejdź do strony głównej"
              >
                <div className={styles.brandImageContainer}>
                  <Image
                    src={brandImage}
                    alt="Ikona aplikacji Centrum Telefonii"
                    className={styles.brandImage}
                  />
                </div>
                <div className={styles.brandBell}></div>
                <p className={clsx(styles.brandName, "h2")}>
                  Centrum <br /> Telefonii
                </p>
              </button>
              <button
                className={styles.hamburgerClose}
                onClick={handleMenuClose}
                aria-label="Zamknij menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  id="vector"
                  aria-hidden="true"
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
              aria-label="Przejdź do sekcji serwis"
            >
              Serwis
            </button>
            <button
              onClick={handleNavigate("accessories")}
              className={styles.hamburgerItem}
              aria-label="Przejdź do sekcji akcesoria"
            >
              Akcesoria
            </button>
            <button
              onClick={handleNavigate("map")}
              className={styles.hamburgerItem}
              aria-label="Przejdź do sekcji dojazd"
            >
              Dojazd
            </button>
            {hasNews && (
              <button
                onClick={handleNavigate("news")}
                className={styles.hamburgerItem}
                aria-label="Przejdź do sekcji aktualności"
              >
                Aktualności
              </button>
            )}
            <button
              onClick={handleNavigate("footer")}
              className={styles.hamburgerItem}
              aria-label="Przejdź do sekcji kontakt"
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
