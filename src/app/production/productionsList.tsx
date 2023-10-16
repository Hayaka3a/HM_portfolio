"use client";
import { useEffect, useState } from "react";
import getAllProductions from "./getAllProductions";
import { production } from "@/type/production";
import styles from "../../styles/productionsList.module.css";
import Link from "next/link";

export default function ProductionsList() {
  const [productions, setProductions] = useState<production[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProductions();
      if (data) {
        setProductions(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {productions?.map((data) => {
        return (
          <Link href={`/production/${data.url}`} key={data.id}>
            <div className={styles.imgBox}>
              <div className={styles.imgOverlay}>
                <img
                  src={data.image1}
                  alt={`image${data.id}`}
                  className={styles.img}
                />
                <div className={styles.titleOverlay}>{data.title}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
