"use client";
import styles from "@/styles/pageTop.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function PageTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className={styles.main} onClick={scrollToTop}>
        <Player
          src={
            "https://lottie.host/a10711e3-6ce1-442a-b9cc-788e81262e84/Z3DshemBlZ.json"
          }
          loop
          autoplay
          style={{ height: "75px", width: "75px" }}
        />
        <div className={styles.overlayText}>
          <p className={styles.text}>▲</p>
        </div>
      </button>
    </>
  );
}
