import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import icon from '../../Image/public/back-icon.png'

const ButtonBack = () => {

  const router = useRouter();
  const handleClick = async () => {
    router.push("/MobilePay");
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <Image src={icon} alt={"Ручка назад"}></Image>
    </button>
  );
};

export default ButtonBack;
