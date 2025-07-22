import clsx from "clsx";
import styles from "./About.module.css";
import ActionButton from "components/ActionButton";
import { motion } from "framer-motion";
import { variants } from "components/Accessory/variants";

export default function About() {
  return (
    <>
      <section
        id="about"
        className={styles.about}
        aria-labelledby="about-title"
      >
        <div className={styles.aboutContainer}>
          <motion.h1
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className={clsx("title", "h1", styles.aboutTitle)}
            id="about-title"
          >
            O nas
          </motion.h1>
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="h5"
          >
            Specjalizujemy się w naprawie telefonów komórkowych, smartfonów oraz
            urządzeń elektrycznych takich jak komputery, słuchawki, aparaty.
          </motion.p>
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="h5"
          >
            Każdą usługę w naszej firmie cechuje:
          </motion.p>
          <div className={styles.aboutAdvantagesContainer}>
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={0}
              className={styles.aboutAdvantageWrapper}
            >
              <div className={styles.aboutAdvantageIcon} aria-hidden="true">
                <span className={clsx("material-icons")}>attach_money</span>
              </div>
              <h2 className={clsx("h5", styles.aboutAdvantageText)}>
                najniższe ceny na rynku
              </h2>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1}
              className={styles.aboutAdvantageWrapper}
            >
              <div className={styles.aboutAdvantageIcon} aria-hidden="true">
                <span className={clsx("material-icons")}>access_time</span>
              </div>
              <h2 className={clsx("h5", styles.aboutAdvantageText)}>
                krótki czas naprawy
              </h2>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={2}
              className={styles.aboutAdvantageWrapper}
            >
              <div className={styles.aboutAdvantageIcon}>
                <span className={clsx("material-icons")}>
                  workspace_premium
                </span>
              </div>
              <h2 className={clsx("h5", styles.aboutAdvantageText)}>
                3-miesięczna gwarancja
              </h2>
            </motion.div>
          </div>
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="h5"
          >
            Dzięki {new Date().getFullYear() - 1998}-letniemu doświadczeniu
            wykonujemy nasze usługi z najwyższą jakością oraz największa
            precyzją zapewniając <b>100% </b>
            satysfakcji z wykonanej usługi.
          </motion.p>
          <ActionButton
            text="Wycena naprawy"
            iconType="call"
            aria-label="Zadzwoń aby wycenić naprawę"
            component="a"
            href="tel:+48 604-436-345"
            className={styles.aboutCallButton}
          />
        </div>
        {/* TODO: add iconify icons */}
      </section>
      <div className={styles.contentDivider}></div>
    </>
  );
}
