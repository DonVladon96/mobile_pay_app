import Button from "@/component/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import AboutMe from '@/component/AboutMe/AboutMe'
import GTA from '../../../public/GTA_2314641931.png'

const About = () => {
  
  return (
    <div className={styles.container}>
      <AboutMe/>
      <div className={styles.imgContainer}>
        <Image
          src={GTA}
          fill={true}
          alt="about us"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Немного креатива)))<br />Похож на парня сверху? Нет?</h1>
          <h2 className={styles.imgDesc}>
            А  так меня видит меня нейросеть по примеру игры Grand Theft Auto (GTA vice city)
          </h2>
        </div>
      </div>
      

      <div className={styles.textContainer}>
      
        <div className={styles.item}>
          <h1 className={styles.title}>Why me? Because I create...</h1>
          <p className={styles.desc}>
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
