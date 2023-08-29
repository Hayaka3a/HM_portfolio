import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <p className={styles.p}>HAYAKAWA MIHO</p>
      </div>
      <div className={styles.mainVisualBox}>
        <img className={styles.photo} alt="main" src="/main.jpg" />
      </div>
    </main>
  );
}
