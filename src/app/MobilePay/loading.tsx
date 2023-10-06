import React from "react";
import styles from "./page.module.css"

const loading = () => {
  return (
    <div className={styles.preloader}>
    <div className={styles.preloader__container}>
        <span className={styles.preloader__round}></span>
    </div>
</div>

  );
};

export default loading;
