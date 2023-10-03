"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";
import AmountInputFunc from "@/component/AmountInput/AmountInput";
import MobilePayForm from "@/component/MobilePayForm/MobilePayForm";
import { useRouter } from "next/navigation";
import icon from '../../../Image/public/back-icon.png'


interface Params {
  category: string;
}

interface CategoryProps {
  params: Params;
}

const getData = (cat: string) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound() as null;
};

const Category: React.FC<CategoryProps> = ({ params }) => {
  const data = getData(params.category);
  const router = useRouter();

  const handleClick = async () => {
    router.push("/MobilePay");
  };

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
       <Image src={icon} alt={"Ручка назад"}></Image>
      </button>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
      <MobilePayForm />
      <AmountInputFunc />
    </div>
  );
};

export default Category;
