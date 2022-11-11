import React, { FC } from "react";

const Timers: FC = () => {
  return (
    <>
      <section id="timers">
        <h1 className="title">Centrum Telefonii to...</h1>
        <div className="timers-wrapper">
          <div id="clients" className="timer-item">
            <span className="material-icons timer-icon">
              sentiment_satisfied_alt
            </span>
            <h1>9999</h1>
            <h2>tysiące zadowolonych klientów</h2>
          </div>

          <div id="repairs" className="timer-item">
            {/* <img src="./images/klucz_francuski.svg" className="timer-icon" /> */}
            <h1>999</h1>
            <h2>setki naprawionych telefonów</h2>
          </div>

          <div id="brand" className="timer-item">
            {/* <img src="./images/22_years.svg" className="timer-icon" /> */}
            <h1>22</h1>
            <h2>najdłużej funkcjonująca firma telefoniczna w Olsztynie</h2>
          </div>
        </div>
      </section>
      <div className="timers-triangle"></div>
    </>
  );
};

export default Timers;
