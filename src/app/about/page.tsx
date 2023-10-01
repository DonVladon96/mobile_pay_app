import styles from "./page.module.css";
import Image from "next/image";
import AboutMe from '../../component/AboutMe/AboutMe'
import GTA from '../../Image/public/GTA_2314641931.png'
import Link from "next/link";

const About = () => {

  return (
    <div className={styles.container}>
      <AboutMe/>
      <h1>Это приложение написано на Next Js + Type Script, а так же Backend база данных на Mongo DB</h1>
      <br />
      <div className={styles.imgContainer}>
        <Image
          src={GTA}
          fill={true}
          alt="about us"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h2 className={styles.imgTitle}>Немного креатива)))<br />Похож на парня сверху? Нет?</h2>
          <h3 className={styles.imgDesc}>
            А  так меня видит меня нейросеть по примеру игры Grand Theft Auto (GTA vice city)
          </h3>
        </div>
      </div>


      <div className={styles.textContainer}>

        <div className={styles.item}>

          <h3 className={styles.title}>Why me? Because I create...</h3>
          <p className={styles.desc}>
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link href="/portfolio" className={styles.linkBtn}>
          <button className={styles.BtnGoProfile}>
           View Portfolio
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
