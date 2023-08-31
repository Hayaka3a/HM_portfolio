import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menuber from "./menuber";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HayakawaM - portfolio",
  description: "早川実穂のポートフォリオ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="container">{children}</div>
        <Menuber />
      </body>
    </html>
  );
}
