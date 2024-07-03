"use client";
import { production } from "@/type/production";
import { useEffect, useState } from "react";
import styles from "@/styles/production.module.css";
import TopLink from "@/components/topLink";
import getProduction from "../getProduction";
import Loading from "@/app/loading";
import Slider from "@/components/slider";
import Heading from "@/components/heading";
import PageTop from "@/components/pageTop";

export default function displayproduction(props: any) {
  const [productionItem, setProduction] = useState<production | undefined>();
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
  }, 2000);

  return (
    <>
      <TopLink />
      <PageTop />
      <main className={styles.main}>
        {!isLoading && productionItem ? (
          <section>
            <Slider data={productionItem} />
            <h1>{productionItem.title}</h1>
            <h3>{productionItem.framework}</h3>
            <div className={styles.charge}>
              <Heading title="担当" />
              <p className={styles.description}> {productionItem.charge} </p>
            </div>
          </section>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
