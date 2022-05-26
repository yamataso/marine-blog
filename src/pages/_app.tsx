import React from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" mx-auto   ">
      <div className=" lg:pb-12  ">
        <div className="max-w-screen-2xl  mx-auto ">
          <header className="flex  bg-gray-900 pointer-events-auto tracking-widest justify-between items-center  md:py-4 ">
            <a
              href="/"
              className="  text-gray-100 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
              aria-label="logo"
            >
              <h1 className=" px-16">Marine Blog</h1>
            </a>

            <nav className="hidden lg:flex gap-12 px-16">
              <ul>
                <li>
                  <Link href="/page/Program">
                    <a
                      href="/"
                      className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
                    >
                      プログラミング
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/page/genre1">
                    <a
                      href="/"
                      className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
                    >
                      ジャンル１
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/page/genre2">
                    <a
                      href="/"
                      className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
                    >
                      ジャンル２
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/page/Form">
                    <a
                      href="/"
                      className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
                    >
                      お問い合わせ
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Menu
            </button>
          </header>
        </div>
      </div>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="mt-16  bg-gray-900">
        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
