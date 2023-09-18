import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/component/button/Button";
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The Future of AI in next few years</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iste
          nulla ipsum libero in accusantium error aut, nobis amet nisi delectus
          illo. Eos maiores voluptatibus in consectetur. Est, quia corporis?
        </p>
        <Button text="Посмотреть другие работы" url="/portfolio"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt={"Hero"} className={styles.img}/>
      </div>
    </main>
  );
}
