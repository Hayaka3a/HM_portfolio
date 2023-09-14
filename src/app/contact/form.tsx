"use client";
import styles from "@/app/styles/contact.module.css";
import AllButton from "@/components/allButton";
import { useState } from "react";
import sendHandler from "./sendHandler";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className={styles.main}>
      <p className={styles.p}>
        何かございましたら、下記のフォームからご連絡ください。
      </p>
      <form action="send">
        <div className={styles.upper}>
          <label htmlFor="name" />
          <input
            id="name"
            type="text"
            name="yourname"
            placeholder="name"
            className={`${styles.name} ${styles.input}`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email" />
          <input
            id="email"
            type="text"
            name="email"
            placeholder="e-mail"
            className={`${styles.email} ${styles.input}`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="comment" />
          <textarea
            id="comment"
            name="comment"
            placeholder="comment"
            className={styles.comment}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <AllButton
          text="送信"
          action={() => sendHandler({ name, email, comment })}
        />
      </form>
    </div>
  );
}
