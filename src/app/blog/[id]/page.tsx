import { ReactElement } from "react";
import styles from "./page.module.css";
import Image from "next/image";


interface GenerateMetadataResult {
  title: string;
  description: string;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<GenerateMetadataResult> {
  const post: PostData = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}


// Интерфейс для данных поста
interface PostData {
  id: string;
  title: string;
  desc: string;
  img: string;
  username: string;
  content: string;
}


// Интерфейс для параметров функции BlogId
interface BlogIdProps {
  params: {
    id: string;
  };
}

async function getData(id: string): Promise<PostData> {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

const BlogId = async ({ params }: BlogIdProps): Promise<ReactElement> => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
