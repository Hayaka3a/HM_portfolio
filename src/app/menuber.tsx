import Link from "next/link";

export default function Menuber() {
  return (
    <div className="main">
      <div className="leftSide"></div>
      <div className="link">
        <Link href="/about">about</Link>
        <Link href="/production">production</Link>
        <Link href="/photo">photo</Link>
        <Link href="/contact">contact</Link>
      </div>
      <div className="rightSide">
        <p className="name">Hayakawa Miho</p>
        <img alt="GitHub" src="/githubIcon.png" />
      </div>
    </div>
  );
}
