import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="row">
        <h3 className="label">Centrum Telefonii s.c. ®</h3>
        <h4 className="text">E-mail: centrumtelefoniiolsztyn@gmail.com</h4>
      </div>
      <div className="row">
        <h3 className="label">CT na ulicy Kościuszki</h3>
        <a className="text" href="tel:668-226-158">
          {" "}
          668-226-158{" "}
        </a>
        <a className="text" href="tel:+48 (89)533-71-32">
          {" "}
          +48 (89)533-71-32{" "}
        </a>
        <h4 className="text">ul.Kościuszki 19/2 Olsztyn</h4>
        <h4 className="text">Poniedziałek-Piątek: 9:00-18:00</h4>
        <h4 className="text">Sobota: 9:00-15:00</h4>
      </div>
      <div className="row">
        <h3 className="label">CT w Manhattanie</h3>
        <a className="text" href="tel:698-390-390">
          {" "}
          698-390-390{" "}
        </a>
        <a className="text" href="tel:+48(89)533-71-32">
          {" "}
          +48 (89)533-71-32{" "}
        </a>
        <h4 className="text">Plac Pułaskiego 7 lokal 62 Olsztyn</h4>
        <h4 className="text">Poniedziałek-Piątek: 10:00-18:00</h4>
        <h4 className="text">Sobota: 10:00-15:00</h4>
      </div>
    </footer>
  );
};

export default Footer;
