const content = [
  `
<div class="information">
              <h1></h1>
              <ul>
                <li>Wymiana ekranów, gniazd, baterii, aparatów</li>
                <li>Naprawa głośników, mikrofonów, aparatów w telefonie</li>
                <li>Wymiana gniazd oraz baterii</li>
                <li>Wgrywanie nowego oprogramowania</li>
                <li>Ściąganie simlocków oraz innych blokad</li>
                <li>Czyszczenie telefonów po zalaniu</li>
                <li>Wykonywanie ekspertyzy</li>
                <li>Inne drobne usługi (zgrywanie danych, konfiguracja)</li>
              </ul>
            </div>
            <div class="gallery">
              <div class="gallery-grid">
                <div class="flip-box">
                  <div class="flip-box-front">
                    <img
                      src="./images/phone_black_d.jpg"
                      alt="Telefony czarny zepsuty"
                    />
                    <h2>Przed</h2>
                  </div>
                  <div class="flip-box-back flip-box-back-vertical">
                    <img
                      src="./images/phone_black_r.jpg"
                      alt="Telefon czarny naprawiony"
                    />
                    <h2>Po</h2>
                  </div>
                </div>
                <div class="flip-box is-desktop">
                  <div class="flip-box-front">
                    <img
                      src="./images/phone_white_d.jpg"
                      alt="Telefon biały zepsuty"
                    />
                    <h2>Przed</h2>
                  </div>
                  <div class="flip-box-back flip-box-back-vertical">
                    <img
                      src="./images/phone_white_r.jpg"
                      alt="Telefon biały naprawiony"
                    />
                    <h2>Po</h2>
                  </div>
                </div>
              </div>
            </div>
  `,
  `
  <div class="information">
              <h1></h1>
              <ul>
                <li>Etui, pokrowce oraz casy</li>
                <li>Szkła hartowane</li>
                <li>Kable, ładowarki sieciowe oraz samochodowe</li>
                <li>Baterie oraz powerbanki</li>
                <li>Uchwyty samochodowe na szybę oraz na wentylacje</li>
                <li>Słuchawki przewodowe i bezprzewodowe</li>
                <li>Karty pamięci</li>
              </ul>
            </div>
            <div class="gallery">
              <div class="gallery-grid">
                <div class="flip-box">
                  <div class="flip-box-front">
                    <img src="./images/etui_venus.png" alt="Etui marki venus" />
                  </div>
                  <div class="flip-box-back flip-box-back-vertical">
                    <img
                      src="./images/bateria_samsung.png"
                      alt="Bateria samsung"
                    />
                  </div>
                </div>
                <div class="flip-box">
                  <div class="flip-box-front">
                    <img src="./images/szklo_9d.png" alt="Szkło hartowane 9D" />
                  </div>
                  <div class="flip-box-back flip-box-back-vertical">
                    <img src="./images/sluchawki.png" alt="Słuchawki" />
                  </div>
                </div>
                <div class="flip-box is-desktop">
                  <div class="flip-box-front">
                    <img src="./images/guma_jelly.png" alt="Case marki Jelly" />
                  </div>
                  <div class="flip-box-back flip-box-back-vertical">
                    <img
                      src="./images/uchwyt_na_szybe.png"
                      alt="Uchwyt na szybę"
                    />
                  </div>
                </div>
                <div class="flip-box is-desktop">
                  <div class="flip-box-front">
                    <img
                      src="./images/ladowarka.png"
                      alt="Ładowarka sieciowa"
                    />
                  </div>
                  <div class="flip-box-back flip-box-back-vertical">
                    <img
                      src="./images/ladowarka_samochodow.png"
                      alt="Ładowarka samochodowa"
                    />
                  </div>
                </div>
              </div>
              <h2>Zdjęcia poglądowe</h2>
            </div>
    `,
  `<div class="information">
  <h1></h1>
  <ul>
    <li>Smartphony</li>
    <li>Telefony komórkowe</li>
    <li>Telefony dla seniorów</li>
  </ul>
</div>
<div class="gallery">
  <div class="gallery-grid">
    <div class="flip-box">
      <div class="flip-box-front">
        <img src="./images/smartphone.png" alt="Smartphone" />
      </div>
      <div class="flip-box-back flip-box-back-vertical">
        <img
          src="./images/telefon_dla_seniora.png"
          alt="Telefon dla seniora"
        />
      </div>
    </div>
  </div>
  <h2>Zdjęcia poglądowe</h2>
</div>
</div>
    `,
];

export default function createCard(value) {
  return `<div data-index="${value}" class="content last">
    <div class="content-wrapper">
    ${content[value]}
    </div>
</div>`;
}
