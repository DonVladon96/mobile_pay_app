import Link from "next/link";
import styles from "./page.module.css";

const MobilePay = () => {
  return (
    <div className={styles.container}>
      <h1>Выберите оператора</h1>
      <Link href="/MobilePay/MTS">
        <span>MTS</span>
      </Link>
      <Link href="/MobilePay/Megafon">
        <span>Megafon</span>
      </Link>

      <Link href="/MobilePay/Beeline">
        <span>Beeline</span>
      </Link>

      <Link href="/MobilePay/Tele2">
        <span>Tele2</span>
      </Link>

      <Link href="/MobilePay/Yota">
        <span>Yota</span>
      </Link>

      <Link href="/MobilePay/Tinkoff">
        <span>Tinkoff</span>
      </Link>

      <Link href="/MobilePay/Sber">
        <span>Sber</span>
      </Link>
    </div>
  );
};

export default MobilePay;
