import React from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" mx-auto max-w-prose">
      <header>
        <ul>
          <li className=" py-8 text-7xl border-b">
            <Link href={"/"}>
              <button>Marine blog</button>
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
