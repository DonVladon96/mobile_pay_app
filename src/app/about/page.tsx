import styles from "./page.module.css";
import Image from "next/image";
import AboutMe from "../../component/AboutMe/AboutMe";
import GTA from "../../Image/public/GTA_2314641931.png";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <AboutMe />
      <br />
      <div className={styles.imgContainer}>
        <section className={styles.techs} id="techs">
          <div className={styles.techs__container}>
            <h2 className={styles.techs__title}>Технологий</h2>
            <h3 className={styles.techs__subtitle}>Реализация</h3>
            <p className={styles.techs__about}>
              В повседневной веб-разработке я освоили технологии, которые
              применил в этом проекте.
            </p>
            <ul className={styles.techs__items}>
              <li className={styles.techs__item}>HTML+CSS</li>
              <li className={styles.techs__item}>JS</li>
              <li className={styles.techs__item}>Next JS</li>
              <li className={styles.techs__item}>React</li>
              <li className={styles.techs__item}>Git</li>
              <li className={styles.techs__item}>Type Script</li>
              <li className={styles.techs__item}>mongoDB</li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <Link href="/portfolio" className={styles.linkBtn}>
            <button className={styles.BtnGoProfile}>
              Посмотреть мои работы
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
