import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Telegram from "../../../public/Telegram_logo.svg.webp";
import Instagramm from "../../../public/inst.avif";
import Gmail from "../../../public/Gmail-logo.png";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>My Application</div>
      <div className={styles.social}>
        <Link href={"https://t.me/WhatIsLovekin"} target="_blank">
          <Image
            src={Telegram}
            width={15}
            height={15}
            className={styles.icon}
            alt="Telegramm"
          />
        </Link>

        <Link href={"https://instagram.com/don_vladon_"} target='_blank'>
          <Image
            src={Instagramm}
            width={15}
            height={15}
            className={styles.icon}
            alt="instagram"
          />
        </Link>

        <Link href={"https://donvladon996@gmail.com"}>
        <Image
          src={Gmail}
          width={15}
          height={15}
          className={styles.icon}
          alt="Gmail"
        />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
