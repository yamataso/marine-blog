import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

const navigation = [
  { name: "ジャンル１", href: "/" },
  { name: "ジャンル２", href: "/" },
  { name: "ジャンル３", href: "/" },
  { name: "ジャンル４", href: "/" },
  { name: "ジャンル５", href: "/" },
  { name: "ジャンル6", href: "/" },
  { name: "ジャンル７", href: "/" },
];
export type Blog = {
  title: string;
  body: string;
  header: string;
};
type Props = MicroCMSListResponse<Blog>;
const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <h1 className=" py-2 text-center  bg-slate-200">
        ~明日を生き抜く力を与える~
      </h1>

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
      <img
        className="  bg-gradient-to-r md:bg-gradient-to-t  left-0  "
        src="/220_M.jpg"
        alt=""
      />
      <div>
        <p className=" text-gray-400">{`記事の総数${props.totalCount}件`}</p>
        <ul className="mt-4 space-y-4">
          {props.contents.map((content) => {
            return (
              <li key={content.id}>
                <Link href={`/blog/${content.id}`}>
                  <a
                    href="/"
                    className=" underline text-blue-800 hover:text-blue-400"
                  >
                    {content.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};
export default Home;
