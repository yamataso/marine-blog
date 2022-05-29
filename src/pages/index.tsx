import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps } from "react";
import { useState } from "react";
import { ProfileJP } from "../../components/ProfileJP";
import { ProfileYama } from "../../components/ProfileYama";

export type Blog = {
  title: string;
  body: string;
  tocvisible: boolean;
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
      <div>
        <nav
          className="relative flex  sm:h-10 lg:justify-start"
          aria-label="Global"
        ></nav>
      </div>
      <img
        className="m-auto rounded-lg "
        src="/220_M.jpg"
        alt="ヒーロー画像"
        width={1024}
        height={980}
      />
      <p className=" text-gray-400 px-44 mt-16">{`${
        search ? "検索結果" : "記事の総数"
      }${totalCount}件`}</p>

      <div className="flex  m-auto">
        <ul className="mt-4 space-y-4">
          {contents.map((content) => {
            return (
              <li key={content.id} className="min-w-max pl-24">
                <Link href={`/blog/${content.id}`}>
                  <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden p-3">
                    <img
                      src="/profile.png"
                      loading="lazy"
                      alt="画像データ"
                      className="w-72  h-36 rounded-lg object-cover object-center  inset-0 group-hover:scale-110 transition duration-200"
                    />

                    <div className="m-4 p-4">
                      <h2 className="text-3xl">
                        <a
                          href="/"
                          className=" underlinegroup w-full md:w-24  lg:w-auto h-24 md:h-full block self-start shrink-0 text-indigo-500 hover:text-indigo-600 active:text-indigo-700overflow-hidden relative"
                        >
                          {content.title}
                        </a>
                      </h2>
                    </div>
                    <div className="pt-20 pl-4 text-right">
                      <span className="text-gray-400 text-sm pr-3">
                        2022/05/21
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mx-4">
          <h1 className="ml-8 text-base text-gray-400 font-medium">
            サイト内検索
          </h1>
          <form className="text-right space-x-4" onSubmit={hundleSubmit}>
            <input
              type="text"
              name="query"
              placeholder="キーワード検索"
              className="px-2 py-1 border-2 shadow-md  border-black rounded-lg "
            />
            <button className="px-5 mt-3 border-2 border-black rounded-lg">
              <img
                src="/magnifying-glass.png"
                alt="検索虫メガネ"
                width={24}
                height={24}
              />
            </button>
            <button
              type="reset"
              className="px-1 my-2 border-2 border-black rounded-lg "
              onClick={handleClick}
            >
              <img src="/reset.png" alt="リセット画像" width={24} height={24} />
            </button>
          </form>
          <div className="m-5 mt-4 ml-12 p-2 flex  w-76 h-96  md:flex-row items-top border rounded-lg overflow-hidden">
            <ProfileJP />
          </div>
          <div className="m-5 mt-4 ml-12 p-2 flex  w-76 h-96  md:flex-row items-top border rounded-lg overflow-hidden">
            <ProfileYama />
          </div>
        </div>
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
