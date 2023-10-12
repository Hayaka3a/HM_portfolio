import styles from "@/styles/pageTitle.module.css";

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className={styles.pageTitleBox}>
      <h1 className={styles.pageTitle}>{title}</h1>
      <span className={styles.pageTitleLine}></span>
    </div>
  );
}
