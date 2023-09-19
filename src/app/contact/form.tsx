"use client";
import styles from "@/app/styles/contact.module.css";
import { useForm } from "react-hook-form";
import { ReactNode } from "react";

export default function Form() {
  //react-hook-formのメソッドを用意
  const {
    register, //入力された値を参照する
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    //初回のバリデーション実行タイミング
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.upper}>
        <label htmlFor="name" />
        <input
          id="name"
          type="text"
          placeholder="name"
          className={`${styles.name} ${styles.input}`}
          maxLength={12}
          onSubmit={onSubmit}
          {...register("name", {
            required: "*名前を入力してください",
          })}
        />

        <label htmlFor="email" />
        <input
          id="email"
          type="text"
          placeholder="e-mail"
          className={`${styles.email} ${styles.input}`}
          onSubmit={onSubmit}
          {...register("email", {
            required: "*メールアドレスを入力してください",
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
              message: "*正しいメールアドレスを入力してください",
            },
          })}
        />
      </div>
      <p className={`${styles.errorName} ${styles.error}`}>
        {errors.name?.message as ReactNode}
      </p>
      <p className={`${styles.errorEmail} ${styles.error}`}>
        {errors.email?.message as ReactNode}
      </p>
      <div className={styles.commentArea}>
        <label htmlFor="comment" />
        <textarea
          id="comment"
          placeholder="comment"
          className={styles.comment}
          onSubmit={onSubmit}
          {...register("comment", {
            required: "*コメントを入力してください",
          })}
        />
        <p className={`${styles.errorComment} ${styles.error}`}>
          {errors.comment?.message as ReactNode}
        </p>
      </div>
      <div className={styles.btnArea}>
        <button
          type="submit"
          className={styles.btn}
          disabled={!isValid || isSubmitting}
        >
          送信
        </button>
        <div className={styles.decorationBox} />
      </div>
    </form>
  );
}
