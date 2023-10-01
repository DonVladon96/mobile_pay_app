import { getServerSession } from "next-auth";
import { authConfig } from "../../../configs/auth";
import Image from "next/image";
import Stonks from "../../Image/public/strong.jpg";
import styles from "./page.module.css"

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <>
      <div className={styles.imgContainer}>
        {session?.user?.image && <Image src={session?.user?.image} alt="" className={styles.imgProfile} />}
        <h1>Profile of {session?.user?.name}</h1>
        <h2>Тестирую новый подход в Next Js + библиотеку Auth Js</h2>
        <h2>
          На этой странице должна была быть информация о профиле, но я решил ее
          не делать. Т.к. вы уже здесь, а значит регистрация и логин успешно
          функционируют и я успешно изучил новую технологию.
        </h2>
        <Image className={styles.img} src={Stonks} alt={"Stonks"}></Image>
      </div>
    </>
  );
}
