import Top from "@/components/top";
import styles from "@/styles/about.module.css";
import PageTitle from "@/components/pageTitle";
import Heading from "@/components/heading";

export default function About() {
  return (
    <>
      <Top />
      <PageTitle title="about" />
      <div className={styles.main}>
        <Heading title="profile" />
        <div className={styles.plofileArea}>
          <div className={styles.leftSide}>
            <div className={styles.nameArea}>
              <h3 className={styles.name}>早川 実穂</h3>
              <h3 className={styles.name}>Hayakawa Miho</h3>
            </div>
            <div className={styles.descriptionArea}>
              <p className={styles.description}>
                神奈川県横浜市出身です。
                <br /> <br />
                2022年10月から株式会社ラクスパートナーズにフロントエンドエンジニアとして所属しています。
                <br />
                趣味は読書、映画、演劇、飼い猫と遊ぶことです。
              </p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="/profile.JPG" alt="profile" className={styles.img} />
          </div>
        </div>
        <div className={styles.skillArea}>
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
        </div>
      </div>
    </>
  );
}
