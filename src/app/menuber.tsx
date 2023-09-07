"use client";

import Link from "next/link";
import styles from "./styles/menubar.module.css";
import { useEffect, useState } from "react";

export default function Menubar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuDisplay() {
    setMenuOpen(!menuOpen);
  }

  function buttonSwitch() {
    return menuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 50 51"
        className={styles.svgClose}
      >
        <path d="M1 50.0909L49 0.999977" stroke="black" />
        <path d="M1 2.09091L49 50.0909" stroke="black" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 55 61"
        className={styles.svgOpen}
      >
        <path d="M0 18.0669H55" stroke="black" />
        <path d="M0 42.2227H55" stroke="black" />
        <path d="M7.22364 60L24.205 1" stroke="black" />
        <path d="M27.5001 59.908L44.7961 1.01578" stroke="black" />
      </svg>
    );
  }

  return (
    <div className={styles.all}>
      <div className={styles.leftSide} onClick={menuDisplay}>
        {buttonSwitch()}
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
            <p className={styles.p}>Hayakawa Miho</p>{" "}
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
