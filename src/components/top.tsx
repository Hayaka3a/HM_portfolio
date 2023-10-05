import Link from "next/link";
import styles from "../styles/top.module.css";

export default function Top() {
  return (
    <>
      <Link href="/" className={styles.link}>
        {"< TOP"}
      </Link>
    </>
  );
}
