import React, { FC } from "react";

const Accessories: FC = () => {
  return (
    <section id="accessories" className="offer">
      <div className="offerContainer">
        <div
          className="offerListContainer slideAnimationLeft"
          id="accessories-list"
        >
          <h1>
            <span>Akcesoria</span>
            <span className="material-icons phoneIcon">phone_iphone</span>
          </h1>
          <ul className="offerList accessories-list">
            <li>Etui, pokrowce oraz casy</li>
            <li>Szkła hartowane</li>
            <li>Kable, ładowarki sieciowe oraz samochodowe</li>
            <li>Baterie oraz powerbanki</li>
            <li>Uchwyty samochodowe na szybę oraz na wentylacje</li>
            <li>Słuchawki przewodowe i bezprzewodowe</li>
            <li>Karty pamięci</li>
          </ul>
        </div>
        <div
          className="offerImages slideAnimationRight"
          id="accessories-images"
        >
          <div className="imageContainerWrapper">
            <div className="imageContainer show">
              <div className="offerImageWrapper accessories-image-wrapper">
                {/* <img src="./images/etui_venus.png" alt="Etui marki venus" /> */}
              </div>
              <div className="offerImageWrapper accessories-image-wrapper">
                {/* <img src="./images/szklo_9d.png" alt="Szkło hartowane 9D" /> */}
              </div>
            </div>
            <div className="imageContainer hide">
              <div className="offerImageWrapper accessories-image-wrapper">
                {/* <img src="./images/guma_jelly.png" alt="Case marki Jelly" /> */}
              </div>
              <div className="offerImageWrapper accessories-image-wrapper">
                {/* <img src="./images/ladowarka.png" alt="Ładowarka sieciowa" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
