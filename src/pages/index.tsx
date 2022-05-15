import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

export type Blog = {
  title: string;
  body: string;
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
        ></nav>
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
