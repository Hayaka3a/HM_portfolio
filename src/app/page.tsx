import styles from "../styles/page.module.css";

require("dotenv").config();

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.link}>HAYAKAWA</div>
      </div>
      <img className={styles.photo} alt="main" src="/main.jpg" />
    </main>
  );
}
