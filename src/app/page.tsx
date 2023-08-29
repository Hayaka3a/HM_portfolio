import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>HAYAKAWA MIHO</div>
      <div className={styles.mainVisual}>
        <img alt="main" src="/main.jpg" />
      </div>
    </main>
  );
}
