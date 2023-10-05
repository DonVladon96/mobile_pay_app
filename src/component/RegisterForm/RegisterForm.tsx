"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/profile?success=Account has been created");
    } catch (err) {
      setError("Что нибудь не так?");
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Регистрация пользователя</h1>
      <h2 className={styles.subtitle}>Пожалуйста, зарегистрируйтесь, чтобы увидеть профиль.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Имя пользователя"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          required
          className={styles.input}
        />
        <button className={styles.button}>Регистрация</button>
        {error && "Что то пошло не так!"}
      </form>
      <span className={styles.or}>- Или -</span>
      <Link className={styles.link} href="/signin">
        Войти в аккаунт
      </Link>
    </div>
  );
};

export default RegisterForm;
