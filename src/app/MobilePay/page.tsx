import Link from "next/link";
import styles from "./page.module.css";

const MobilePay = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Выберите оператора мобильной связи</h1>
      <ul className={styles.navtab}>
      <Link className={styles.navtab__button} href="/MobilePay/MTS">
        <span>MTS</span>
      </Link>
      <Link className={styles.navtab__button} href="/MobilePay/Megafon">
        <span>Megafon</span>
      </Link>

      <Link className={styles.navtab__button} href="/MobilePay/Beeline">
        <span>Beeline</span>
      </Link>

      <Link className={styles.navtab__button} href="/MobilePay/Tele2">
        <span>Tele2</span>
      </Link>

      <Link className={styles.navtab__button} href="/MobilePay/Yota">
        <span>Yota</span>
      </Link>

      <Link className={styles.navtab__button} href="/MobilePay/Tinkoff">
        <span>Tinkoff</span>
      </Link>

      <Link className={styles.navtab__button} href="/MobilePay/Sber">
        <span>Sber</span>
      </Link>
      </ul>
      
    </div>
  );
};

export default MobilePay;
