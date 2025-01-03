import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menuber from "../components/menuber";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HayakawaM - portfolio",
  description: "Hayakawaのポートフォリオ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Klee+One&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <Suspense fallback={<Loading />}>
          <div className="container">{children}</div>
        </Suspense>
        <Menuber />
      </body>
    </html>
  );
}
