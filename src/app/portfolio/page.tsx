import Link from "next/link";
import styles from "./page.module.css";


const Portfolio = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.selectTitle}>Выберите раздел</h1>
    <div className={styles.items}>
      <Link href="/about" className={styles.item}>
        <span className={styles.title}>Обо мне</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.title}>Мои работы</span>
      </Link>
      <Link href="/MobilePay" className={styles.item}>
        <span className={styles.title}>Mobile Pay</span>
      </Link>
    </div>
  </div>
  );
};

export default Portfolio;
