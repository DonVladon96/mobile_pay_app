import styles from "./page.module.css"
import { SignInForm } from "@/component/SignInForm/SignInForm";

export default async function Signin() {
    return (
        <div className={styles.stack}>
            <SignInForm/>
        </div>
        )
}