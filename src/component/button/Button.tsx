import Link from "next/link";
import styles from "./page.module.css"

type ButtonProps = {
    text: string;
    url: string;
  };

const Button: React.FC<ButtonProps> = ({text, url}) => {
  return (
    <Link href={url}>
        <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button