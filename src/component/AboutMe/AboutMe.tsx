import React from "react";
import styles from "./page.module.css";
import Avatar from "../../Image/public/thisIam.jpg";
import Image from "next/image";

function AboutMe() {
  return (
    <section className={styles.aboutme} id="student">
      <div className={styles.aboutme__container}>
        <h2 className={styles.aboutme__title}>About me</h2>
        <div className={styles.aboutme__wrapper}>
          <div className={styles.aboutme__info}>
            <h3 className={styles.aboutme__name}>Влад</h3>
            <p className={styles.aboutme__job}>Фронтенд-разработчик, 27 лет</p>
            <p className={styles.aboutme__biography}>
              Я&nbsp;родился и&nbsp;живу в&nbsp;Ижевске, закончил факультет
              юриспруденции УдГУ. У&nbsp;меня есть девушка и&nbsp;кот.
              Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. С 2022
              года занимаюсь программированием. Люблю добавлять креатива во
              Frontend разработку. После того, как прошёл курс
              по&nbsp;веб-разработке, начал заниматься фриланс-заказами
              и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a
              className={styles.aboutme__github}
              href="https://github.com/DonVladon96"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <Image
            className={styles.aboutme__avatar}
            src={Avatar}
            alt="Мое фото"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
