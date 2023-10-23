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
  }, 2000);

  return (
    <>
      <TopLink />
      <PageTop />
      <main className={styles.main}>
        {!isLoading && production ? (
          <section>
            <Slider data={production} />
            <h1>{production.title}</h1>
            <h3>{production.framework}</h3>
            <div className={styles.charge}>
              <Heading title="担当" />
              {production.charge}
            </div>
          </section>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
