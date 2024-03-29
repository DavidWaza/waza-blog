import Navbar from "@/components/Navbar";
import { Html,Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Waza blog</title>
      </Head>
      <body className="bg-[#161618] h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
