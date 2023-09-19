import PageTitle from "@/components/pageTitle";
import Top from "@/components/top";
import Form from "./form";
import styles from "@/app/styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <Top />
      <PageTitle title="contact" />
      <div className={styles.main}>
        <p className={styles.p}>
          何かございましたら、下記のフォームからご連絡ください。
        </p>
        <Form />
      </div>
    </>
  );
}
