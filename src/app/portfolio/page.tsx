import Link from "next/link";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.selectTitle}>Choose a gallery</h1>
    <div className={styles.items}>
      <Link href="/about" className={styles.item}>
        <span className={styles.title}>About Me</span>
      </Link>
      <Link href="/portfolio/websites" className={styles.item}>
        <span className={styles.title}>Websites</span>
      </Link>
      <Link href="/mobile" className={styles.item}>
        <span className={styles.title}>MobilePay</span>
      </Link>
    </div>
  </div>
  );
};

export default Portfolio;
