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
          <motion.h2
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
          </motion.h2>
          <motion.h3
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
          </motion.h3>
          <motion.h3
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="h5"
          >
            Każdą usługę w naszej firmie cechuje:
          </motion.h3>
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
              <div className={styles.aboutAdvantageIcon}>
                <span className={clsx("material-icons")}>attach_money</span>
              </div>
              <h3 className={clsx("h5", styles.aboutAdvantageText)}>
                najniższe ceny na rynku
              </h3>
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
              <div className={styles.aboutAdvantageIcon}>
                <span className={clsx("material-icons")}>access_time</span>
              </div>
              <h3 className={clsx("h5", styles.aboutAdvantageText)}>
                krótki czas naprawy
              </h3>
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
              <h3 className={clsx("h5", styles.aboutAdvantageText)}>
                3-miesięczna gwarancja
              </h3>
            </motion.div>
          </div>
          <motion.h3
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
          </motion.h3>
          <ActionButton
            text="Wycena naprawy"
            iconType="call"
            aria-label="Zadzwoń aby wycenić naprawy"
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
