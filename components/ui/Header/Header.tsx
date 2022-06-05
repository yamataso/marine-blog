import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <div>
      <header className="sm:flex  bg-gray-900 pointer-events-auto tracking-widest justify-between items-center py-4">
        <a
          href="/"
          className="  text-gray-100 px-2 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-1.5"
          aria-label="logo"
        >
          <h1 className=" lg:px-16 px-4 mb-4">Marine Blog</h1>
        </a>
        <nav className="flex lg:gap-12 lg:px-16 mx-2">
          <ul className="m-1">
            <li className="text-sm ">
              <Link href="/page/Program">
                <a
                  href="/"
                  className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg font-semibold transition duration-100 text-xs"
                >
                  プログラミング
                  <img
                    src="computer.png"
                    alt=""
                    className="m-1 ml-8 pl-5  py-2"
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className="m-1">
            <li className="text-sm  px-2">
              <Link href="/page/genre1">
                <a
                  href="/"
                  className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg font-semibold transition duration-100 text-xs ml-2 "
                >
                  健康
                  <img
                    src="hospital.png"
                    alt=""
                    className="m-1 ml-3 pr-2   py-2"
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className="m-1">
            <li className="text-sm px-2">
              <Link href="/page/genre2">
                <a
                  href="/"
                  className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg font-semibold transition duration-100 text-xs"
                >
                  自己啓発
                  <img src="book.png" alt="" className="m-1 ml-3 pl-3 py-2" />
                </a>
              </Link>
            </li>
          </ul>
          <ul className="m-1">
            <li className="text-sm px-2 ">
              <Link href="/page/Form">
                <a
                  href="/"
                  className="text-gray-100 hover:text-indigo-500 active:text-indigo-700 lg:text-lg font-semibold transition duration-100 text-xs"
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
