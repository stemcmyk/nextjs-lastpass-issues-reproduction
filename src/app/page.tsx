import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <input id="email" type="email" placeholder="Test"></input>
      <input id="password" type="password" placeholder="Test"></input>
    </main>
  );
}
