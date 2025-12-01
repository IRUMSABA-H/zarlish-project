import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zarlish Abbasi | Content Creator</title>  {/* ye tumhara tab title */}
        <link rel="icon" href="/favicon_32.png" />         {/* ye tumhara favicon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
