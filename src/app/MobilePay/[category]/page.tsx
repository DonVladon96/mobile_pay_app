"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";
import AmountInputFunc from "@/component/AmountInput/AmountInput";
import MobilePayForm from "@/component/MobilePayForm/MobilePayForm";
import { useRouter } from "next/navigation";
import icon from '../../../Image/public/back-icon.png'
import ButtonBack from "@/component/ButtonBack/ButtonBack";
import { useState } from "react";
import Popup from "@/component/Popup/Popup";


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
  const [isInfoMessage, setInfoMessage] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handlePay = async () => {
    setMessage('Вы успешно оплатили! Через 3 секунды вас перекину домой!');
    setIsOpen(true);
    setTimeout(closePopup, 3000)
  }

  function closePopup() {
    setIsOpen(false);
    router.push("/MobilePay");
  }

  const handleClose = () => {
    setIsOpen(false);
  
  }

  const handleClick = async () => {
    router.push("/MobilePay");
  };

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.container}>
     <ButtonBack/>
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
      <button onClick={handlePay} className={styles.ButtonPay}>Оплатить</button>
      <Popup isOpen={isOpen} handleClose={handleClose} message={message}/>
    </div>
  );
};

export default Category;
