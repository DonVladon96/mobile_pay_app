import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Button from "@/component/button/Button";
import { items } from "./data";
import React from "react";

interface Item {
  id: number;
  title: string;
  desc: string;
  image: string;
  url: string;
}

type Categories = "websites";

const getData = (cat: Categories): Item[] => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category: React.FC<{ params: { category: Categories } }> = ({
  params,
}) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
         <div className={styles.item} key={item.id}>
         <div className={styles.content}>
           <h1 className={styles.title}>{item.title}</h1>
           <p className={styles.desc}>{item.desc}</p>
           <Button text="Узнать больше" url={item.url}  />
         </div>
         <div className={styles.imgContainer}>
           <Image
             className={styles.img}
             fill={true}
             src={item.image}
             alt={item.title}
           />
         </div>
       </div>
        ))}
     
    </div>
  );
};

export default Category;
