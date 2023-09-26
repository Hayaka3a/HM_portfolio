"use client";
import styles from "@/components/styles/preparing.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Preparing() {
  return (
    <>
      <div className={styles.main}>
        <Player
          src={
            "https://lottie.host/a10711e3-6ce1-442a-b9cc-788e81262e84/Z3DshemBlZ.json"
          }
          loop
          autoplay
          style={{ height: "300px", width: "300px" }}
        />
        <div className={styles.overlayText}>
          <p className={styles.text}>Coming soon</p>
        </div>
      </div>
    </>
  );
}
