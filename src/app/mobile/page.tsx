import MobilePayForm from "@/component/MobilePayForm/MobilePayForm";
import styles from "./page.module.css";
import AmountInputFunc from "@/component/AmountInput/AmountInput";

export default async function MobilePayFunc() {
  return <div className={styles.stack}>
    <h1>Добро пожаловать</h1>
    <h2>Выберите страну, затем введите номер телефона</h2>
    <MobilePayForm/>
    <AmountInputFunc/>
  </div>;
}
