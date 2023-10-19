"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "@/styles/photo.module.css";

export default function CategoryRadio({
  category,
  setCategory,
}: {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  const categoryList = ["all", "animal", "scenery"];

  return (
    <div className={styles.category}>
      {categoryList.map((c: string) => {
        return (
          <label
            key={c}
            className={c === category ? styles.checkedLabel : styles.label}
          >
            <input
              type="radio"
              value={c}
              onChange={() => setCategory(c)}
              checked={c === category}
              className={styles.input}
            />
            <p className={styles.text}>{c}</p>
          </label>
        );
      })}
    </div>
  );
}
