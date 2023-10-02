"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, type FormEventHandler, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const params = useSearchParams();
  const [success, setSuccess] = useState("");

  const handleClick = async() => {
    await signIn('google')
    router.push("/profile");
    
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log("Error: ", res);
      setError("Ваш Email или Пароль не правильный!");
    }
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the Profile.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button className={styles.button}>Login</button>
        {error && (
          <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500">
            {error}
          </span>
        )}
      </form>
      <button
        onClick={handleClick}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/register">
        Create new account
      </Link>
    </div>
  );
};

export { SignInForm };
