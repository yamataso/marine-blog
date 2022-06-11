import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <div>
      <header className="pointer-events-auto  items-center justify-between bg-gray-900 py-4 tracking-widest sm:flex">
        <a
          href="/"
          className="  text-black-800 inline-flex items-center gap-1.5 px-2 text-2xl font-bold text-gray-100 md:text-3xl"
          aria-label="logo"
        >
          <h1 className=" mb-4 px-4 lg:px-16">Marine Blog</h1>
        </a>
        <nav className="mx-2 flex lg:gap-12 lg:px-16">
          <ul className="m-1">
            <li className="text-sm ">
              <Link href="/page/Program">
                <a
                  href="/"
                  className="text-xs font-semibold text-gray-100 transition duration-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg"
                >
                  プログラミング
                  <img
                    src="computer.png"
                    alt=""
                    className="m-1 ml-8 py-2  pl-5"
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className="m-1">
            <li className="px-2  text-sm">
              <Link href="/page/Health">
                <a
                  href="/"
                  className="ml-2 text-xs font-semibold text-gray-100 transition duration-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg "
                >
                  健康
                  <img
                    src="hospital.png"
                    alt=""
                    className="m-1 ml-3 py-2   pr-2"
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className="m-1">
            <li className="px-2 text-sm">
              <Link href="/page/Selfenlightenment">
                <a
                  href="/"
                  className="text-xs font-semibold text-gray-100 transition duration-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg"
                >
                  本
                  <img src="book.png" alt="" className="m-1 ml-3 py-2 pl-3" />
                </a>
              </Link>
            </li>
          </ul>
          <ul className="m-1">
            <li className="px-2 text-sm ">
              <Link href="/page/Form">
                <a
                  href="/"
                  className="text-xs font-semibold text-gray-100 transition duration-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg"
                >
                  お問い合わせ
                  <img src="form.png" alt="" className="m-1 ml-10 py-2 " />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
