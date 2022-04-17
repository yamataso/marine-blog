import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const navigation = [
  { name: "ジャンル１", href: "/" },
  { name: "ジャンル２", href: "/" },
  { name: "ジャンル３", href: "/" },
  { name: "ジャンル４", href: "/" },
  { name: "ジャンル５", href: "/" },
  { name: "ジャンル6", href: "/" },
];
const Home: NextPage = () => {
  return (
    <div>
      <h1 className=" py-2 text-center  bg-slate-200">
        ~明日を生き抜く力を与える~
      </h1>
      <ul className=" py-3 text-7xl text-center bg-slate-200">
        <li>
          <Link href={"/"}>
            <button>Marine blog</button>
          </Link>
        </li>
      </ul>
      <div className="relative  py-5 px-4 lg:px-8  bg-purple-100">
        <nav
          className="relative flex  sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className=" mx-2 px-2  md:block md:ml-10 md:pr-4 md:space-x-8 ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm justify-between 
                                                      md:text-base font-semibold text-center rounded-lg outline-none transition duration-100  px-6 
                                                      md:px-8 py-2 md:py-3 "
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
