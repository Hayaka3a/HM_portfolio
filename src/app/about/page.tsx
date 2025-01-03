import TopLink from "@/components/topLink";
import styles from "@/styles/about.module.css";
import PageTitle from "@/components/pageTitle";
import Heading from "@/components/heading";
import PageTop from "@/components/pageTop";

export default function About() {
  return (
    <>
      <TopLink />
      <PageTitle title="about" />
      <PageTop />
      <main className={styles.main}>
        <section>
          <Heading title="profile" />
          <div className={styles.plofileArea}>
            <div className={styles.leftSide}>
              <div className={styles.nameArea}>
                <h3 className={styles.name}>Hayakawa</h3>
              </div>
              <div className={styles.descriptionArea}>
                <p className={styles.description}>
                  神奈川県横浜市出身です。
                  <br /> <br />
                  2022年10月から株式会社ラクスパートナーズにフロントエンドエンジニアとして所属しています。
                  <br /> <br />
                  趣味はカメラ、読書、映画鑑賞、飼い猫と遊ぶことです。
                </p>
              </div>
            </div>
            <div className={styles.rightSide}>
              <img src="/profile.JPG" alt="profile" className={styles.img} />
            </div>
          </div>
        </section>
        <section className={styles.skillArea}>
          <Heading title="skill" />
          <div className={styles.descriptionArea}>
            <h4 className={styles.itemName}>― 言語</h4>
            <p className={styles.description}>
              HTML / CSS / JavaScript / TypeScript
            </p>
            <h4 className={styles.itemName}>
              ― Webアプリケーションフレームワーク
            </h4>
            <p className={styles.description}>React / Next.js </p>
          </div>
        </section>
      </main>
    </>
  );
}
