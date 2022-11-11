import React, { FC } from "react";

import styles from "./Nav.module.css";

const Nav: FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navMain}>
          <button className={styles.navBrand} data-move-to="#home">
            <div className={styles.brandImageContainer}>
              {/* <img src="./images/ct_icon_white.png" className={styles.brandImage" /> */}
            </div>
            <div className={styles.brandBell}></div>

            <h2 className={styles.brandName}>
              Centrum <br /> Telefonii
            </h2>
          </button>
        </div>
        {/* is-desktop */}
        <div className={styles.navLinks}>
          <button className={styles.navLink} data-move-to="#service">
            Oferta
          </button>
          <button className={styles.navLink} data-move-to="#map">
            Jak dojechać
          </button>
          <button className={styles.navLink} data-move-to="#news">
            Aktualności
          </button>
          <button className={styles.navLink} data-move-to="footer">
            Kontakt
          </button>
        </div>
        {/* is-mobile is-tablet */}
        <button id="hamburger" className={styles.hamburgerIcon}>
          <div className={styles.hamburgerBell}></div>
          <div className={styles.hamburgerBell}></div>
          <div className={styles.hamburgerBell}></div>
        </button>
      </nav>
      {/* menuClosed is-mobile is-tablet */}
      {/* <div className={styles.hamburgerMenu}>
        <div className={styles.hamburgerContainer}>
          <div className={styles.hamburgerHeader}>
            <button className={styles.navBrand} data-move-to="#home">
              <div className={styles.brandImageContainer}>
                <img src="./images/ct_icon_white.png" className={styles.brandImage} />
              </div>
              <div className={styles.brandBell}></div>
              <h2 className={styles.brandName}>
                Centrum <br /> Telefonii
              </h2>
            </button>
            <button id="hamburgerClose" className={styles.hamburgerClose}>
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
                  fill="#f1f1f1"
                />
              </svg>
            </button>
          </div>
          <button className={styles.hamburgerItem} data-move-to="#service">
            Oferta
          </button>
          <button className={styles.hamburgerItem} data-move-to="#map">
            Jak dojechać
          </button>
          <button className={styles.hamburgerItem} data-move-to="#news">
            Aktualności
          </button>
          <button className={styles.hamburgerItem} data-move-to="footer">
            Kontakt
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Nav;
