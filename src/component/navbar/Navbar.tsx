"use client";
import Link from "next/link";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

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
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
];

const Navbar = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session);

  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        MyApp
      </Link>

      <div className={styles.links}>
        <DarkModeToggle />

        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {/* {session.status == "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )} */}

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
            Sign Out
          </Link>
        ) : (
          <Link href="/api/auth/signin">SignIn</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
