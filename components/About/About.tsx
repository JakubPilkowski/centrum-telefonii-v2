import clsx from "clsx";
import styles from "./About.module.css";
import ActionButton from "components/ActionButton";
import { motion } from "framer-motion";
import { variants } from "components/Accessory/variants";

export default function About() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <motion.h1
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className={clsx("title", styles.aboutTitle)}
          >
            O nas
          </motion.h1>
          <motion.h5
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Specjalizujemy się w naprawie telefonów komórkowych, smartfonów oraz
            urządzeń elektrycznych takich jak komputery, słuchawki, aparaty.
          </motion.h5>
          <motion.h5
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Każdą usługę w naszej firmie cechuje:
          </motion.h5>
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
              <h5 className={styles.aboutAdvantageText}>
                najniższe ceny na rynku
              </h5>
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
              <h5 className={styles.aboutAdvantageText}>krótki czas naprawy</h5>
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
              <h5 className={styles.aboutAdvantageText}>
                3-miesięczna gwarancja
              </h5>
            </motion.div>
          </div>
          <motion.h5
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Dzięki {new Date().getFullYear() - 1998}-letniemu doświadczeniu
            wykonujemy nasze usługi z najwyższą jakością oraz największa
            precyzją zapewniając <b>100% </b>
            satysfakcji z wykonanej usługi.
          </motion.h5>
          <ActionButton
            text="Wycena naprawy"
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
