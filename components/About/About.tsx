import clsx from "clsx";
import styles from "./About.module.css";
import ActionButton from "components/ActionButton";

export default function About() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <h1 className={clsx("title", styles.aboutTitle)}>
            Czym się zajmujemy?
          </h1>
          <h6>
            Specjalizujemy się w naprawie telefonów komórkowych, smartfonów oraz
            urządzeń elektrycznych takich jak komputery, słuchawki, aparaty.
          </h6>
          <h6>Każdą usługę w naszej firmie cechuje:</h6>
          <div className={styles.aboutAdvantagesContainer}>
            <div className={styles.aboutAdvantageWrapper}>
              <span
                className={clsx("material-icons", styles.aboutAdvantageIcon)}
              >
                attach_money
              </span>
              <h6 className={styles.aboutAdvantageText}>
                najniższe ceny na rynku
              </h6>
            </div>
            <div className={styles.aboutAdvantageWrapper}>
              <span
                className={clsx("material-icons", styles.aboutAdvantageIcon)}
              >
                access_time
              </span>
              <h6 className={styles.aboutAdvantageText}>krótki czas naprawy</h6>
            </div>
            <div className={styles.aboutAdvantageWrapper}>
              <span
                className={clsx("material-icons", styles.aboutAdvantageIcon)}
              >
                workspace_premium
              </span>
              <h6 className={styles.aboutAdvantageText}>
                3-miesięczna gwarancja
              </h6>
            </div>
          </div>
          <h6>
            Dzięki {new Date().getFullYear() - 1998}-letniemu doświadczeniu
            wykonujemy nasze usługi z najwyższą jakością oraz największa
            precyzją zapewniając <b>100% </b>
            satysfakcji z wykonanej usługi.
          </h6>
          <ActionButton
            text="Wycena naprawy?"
            iconType="call"
            type="a"
            href="tel:+48 (89)533-71-32"
            className={styles.aboutCallButton}
          />
        </div>
        {/* TODO: add iconify icons */}
      </section>
      <div className={styles.contentDivider}></div>
    </>
  );
}
