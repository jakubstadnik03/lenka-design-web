import "../styles/globals.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/slider.css";
import "../styles/kontakt.css";
import "../styles/cenik.css";
import "../styles/realizace.css";
import "../styles/blog.css";
import "../styles/reference.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
