import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Link href="/users">Users</Link>
      <br />
      <Link href="/users/budi">User: Budi</Link>
      <br />
      <Link href="/login">Login</Link>
    </main>
  );
}
