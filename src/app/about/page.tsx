import Top from "@/components/top";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Top />
      <div className="main">
        <h1 className="pageTitle">about</h1>
        <div className={styles.plofileBox}>
          <h2 className="heading">profile</h2>
          <div className={styles.leftSide}>
            <div className={styles.nameBox}>
              <h3 className={styles.jpName}>早川 実穂</h3>
              <h3 className={styles.enName}>Hayakawa Miho</h3>
            </div>
            <div className={styles.descriptionBox}>
              <p className={styles.description}>
                神奈川県横浜市出身です。
                <br /> <br />
                2022年10月から株式会社ラクスパートナーズにフロントエンドエンジニアとして所属しています。
                <br />
                飼い猫と小説と映画を褒め称える日々を過ごしています。
              </p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="" alt="profile" />
          </div>
        </div>
        <div className={styles.skillBox}>
          <h2 className="heading">skill</h2>{" "}
          <div className={styles.descriptionBox}>
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
