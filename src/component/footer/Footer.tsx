import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Telegram from "../../Image/public/telegram_logo.png";
import Instagramm from "../../Image/public/instagram_logo.png";
import Gmail from "../../Image/public/Gmail-logo.png";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contants}>Мои контакты</div>
      <div className={styles.social}>
        <Link href={"https://t.me/WhatIsLovekin"} target="_blank">
          <Image
            src={Telegram}
            width={30}
            height={30}
            className={styles.icon}
            alt="Telegramm"
          />
        </Link>

        <Link href={"https://instagram.com/don_vladon_"} target='_blank'>
          <Image
            src={Instagramm}
            width={30}
            height={30}
            className={styles.icon}
            alt="instagram"
          />
        </Link>

        <Link href={"https://donvladon996@gmail.com"}>
        <Image
          src={Gmail}
          width={30}
          height={30}
          className={styles.icon}
          alt="Gmail"
        />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
