import Link from "next/link";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <Link href="/" className={styles.link}>
          HAYAKAWA MIHO
        </Link>
      </div>
      <div className={styles.mainVisualBox}>
        <img className={styles.photo} alt="main" src="/main.jpg" />
      </div>
    </main>
  );
}
