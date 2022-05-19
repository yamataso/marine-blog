import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps } from "react";
import { useState } from "react";

export type Blog = {
  title: string;
  body: string;
};
type Props = MicroCMSListResponse<Blog>;
const Home: NextPage<Props> = (props) => {
  const [search, setSeach] = useState<MicroCMSListResponse<Blog>>();

  const hundleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSeach(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSeach(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <div>
      <form className="flex gap-x-2 my-5" onSubmit={hundleSubmit}>
        <input
          type="text"
          name="query"
          className="border-2 shadow-md px-2 border-black"
        />
        <button className="px-2 ml-3 border-2 border-black">検索</button>
        <button
          type="reset"
          className="px-2 ml-3 border-2 border-black"
          onClick={handleClick}
        >
          リセット
        </button>
      </form>
      <h1 className=" py-2 text-center  bg-slate-200">
        ~明日を生き抜く力を与える~
      </h1>

      <div>
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
        <p className=" text-gray-400">{`${
          search ? "検索結果" : "記事の総数"
        }${totalCount}件`}</p>

        <ul className="mt-4 space-y-4">
          {contents.map((content) => {
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
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};
export default Home;
