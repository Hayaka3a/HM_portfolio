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
            {menuOpen ? <></> : <div className={styles.text}>menu</div>}
            <div className={styles.bar} />
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className={styles.rightSide}>
          <ul className={styles.nav}>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/production">production</Link>
            </li>
            <li>
              <Link href="/photo">photo</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          <div className={styles.nameArea}>
            <p className={styles.name}>Hayakawa</p>
            <Link href="https://github.com/Hayaka3a" target="_blank">
              <img alt="GitHub" src="/githubIcon.png" height={50} />
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.close}></div>
      )}
    </div>
  );
}
