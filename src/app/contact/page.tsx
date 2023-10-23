import PageTitle from "@/components/pageTitle";
import TopLink from "@/components/topLink";
import Form from "./form";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <TopLink />
      <PageTitle title="contact" />
      <main className={styles.main}>
        <p className={styles.p}>
          何かございましたら、下記のフォームからご連絡ください。
        </p>
        <Form />
      </main>
    </>
  );
}
