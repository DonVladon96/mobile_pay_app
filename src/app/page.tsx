import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/acetone-2023921-133318-608.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Добро пожаловать на мою личную страничку
        </h1>
        <p className={styles.desc}>
          Здесь вы узнаете обо мне больше. После регистрации вас ждет сюрприз. А
          так же есть формочки для оплаты мобильной связи.
        </p>
        <Link href="/portfolio" className={styles.linkBtn}>
          <button className={styles.BtnGoProfile}>
            Посмотреть другие работы
          </button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt={"Hero"} className={styles.img} />
      </div>
    </main>
  );
}
