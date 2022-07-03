import React from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../../components/Layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3288980965726316"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
