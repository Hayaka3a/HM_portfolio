"use client";
import { production } from "@/type/production";
import { useEffect, useState } from "react";
import styles from "@/styles/production.module.css";
import Top from "@/components/top";
import getProduction from "../getProduction";
import Loading from "@/app/loading";
import Slider from "@/components/slider";
import Heading from "@/components/heading";

export default function production(props: any) {
  const [production, setProduction] = useState<production | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getProduction(props.params.url);
      if (data) {
        setProduction(data);
      }
    }
    fetchData();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 700);

  return (
    <>
      <Top />
      <div className={styles.main}>
        {!isLoading && production ? (
          <div>
            <Slider data={production} />
            <div className={styles.title}>{production.title}</div>
            <div className={styles.fw}>{production.framework}</div>
            <div className={styles.charge}>
              <Heading title="担当" />
              {production.charge}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
