"use client";
import Link from "next/link";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = {
  lable: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const links = [
  {
    id: 1,
    title: "Главная",
    url: "/",
  },
  {
    id: 2,
    title: "Портфолио",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Обо мне",
    url: "/about",
  },
];

const Navbar = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();
  const [nav, setNav] = useState(false);
  console.log(session);

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo_image}>
          <Link href="/" className={styles.logo}>
            MyApp
          </Link>
          </div>
         

          <div className={
              nav ? [styles.links, styles.active].join(" ") : [styles.links]
            }>
            <DarkModeToggle />

            {links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            ))}

            {session?.data && <Link href="/profile">Profile</Link>}

            {session?.data ? (
              <Link
                href="#"
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Выйти
              </Link>
            ) : (
              <Link href="/signin">Войти</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
