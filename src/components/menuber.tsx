"use client";
import Link from "next/link";
import styles from "../styles/menubar.module.css";
import { useState } from "react";

export default function Menubar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuDisplay() {
    setMenuOpen(!menuOpen);
  }

  function buttonSwitch() {
    return menuOpen ? (
      <div className={styles.closeBtn}>
        <img src="/close.png" />
      </div>
    ) : (
      <div className={styles.openBtn}>
        <img src="/open.png" />
      </div>
    );
  }

  return (
    <div className={styles.all}>
      <div className={styles.leftSide} onClick={menuDisplay}>
        <div className={styles.hamburgerMenu}>
          <div
            className={`${styles.hamburgerIcon} ${
              menuOpen ? styles.open : styles.close
            }`}
            onClick={buttonSwitch}
          >
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className={styles.rightSide}>
          <div className={styles.linkArea}>
            <Link href="/about" className={styles.link}>
              about
            </Link>
            <Link href="/production" className={styles.link}>
              production
            </Link>
            <Link href="/photo" className={styles.link}>
              photo
            </Link>
            <Link href="/contact" className={styles.link}>
              contact
            </Link>
          </div>
          <div className={styles.nameArea}>
            <p className={styles.p}>Hayakawa Miho</p>
            <Link href="https://github.com/Hayaka3a" target="_blank">
              <img alt="GitHub" src="/githubIcon.png" height={50} />
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
