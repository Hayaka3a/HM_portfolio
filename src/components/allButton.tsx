"use client";
import styles from "./styles/button.module.css";

export default function AllButton({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <div className={styles.btnArea} onClick={action}>
      <button className={styles.btn}>{text}</button>
      <div className={styles.decorationBox} />
    </div>
  );
}
