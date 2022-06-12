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
  tocvisible: true;
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
          className="relative flex  h-10 lg:justify-start"
          aria-label="Global"
        ></nav>
      </div>
      <img
        className="m-auto rounded-lg lg:inset-full"
        src="/220_M.jpg"
        alt="ヒーロー画像"
        width={1024}
        height={980}
      />
      <p className=" pl-4 text-gray-400 lg:mt-16 lg:px-44 ">{`${
        search ? "検索結果" : "記事の総数"
      }${totalCount}件`}</p>

      <div className="m-auto lg:flex">
        <ul className="sm:mt-4 sm:space-y-4 ">
          {contents.map((content) => {
            return (
              <li key={content.id} className="sm:min-w-max  lg:pl-24">
                <Link href={`/blog/${content.id}`}>
                  <div className="m-4 flex flex-col items-center overflow-hidden rounded-lg border md:max-w-3xl md:flex-row lg:m-4 lg:p-3 2xl:max-w-full ">
                    <img
                      src="/profile.png"
                      loading="lazy"
                      alt="画像データ"
                      className="inset-0 m-4 h-36 w-72 rounded-lg object-cover  object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="m-4 p-4">
                      <h2 className="text-xl">
                        <a
                          href="/"
                          className="underlinegroup active:text-indigo-700overflow-hidden relative block shrink-0 self-start text-indigo-500 hover:text-indigo-600 md:h-full lg:h-24 lg:w-auto"
                        >
                          {content.title}
                        </a>
                      </h2>
                    </div>
                    <div className="pt-4 pl-4 text-right sm:pt-20">
                      <span className="pr-3 text-sm text-gray-400">
                        2022/06/12
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:mx-4">
          <h1 className="mr-60 text-right text-base font-medium text-gray-400 sm:ml-8">
            サイト内検索
          </h1>
          <form className="space-x-4 sm:text-right" onSubmit={hundleSubmit}>
            <input
              type="text"
              name="query"
              placeholder="キーワード検索"
              className="rounded-lg border-2 border-black px-2 py-1 shadow-md "
            />
            <button className="mt-3 rounded-lg border-2 border-black px-5">
              <img
                src="/magnifying-glass.png"
                alt="検索虫メガネ"
                width={24}
                height={24}
              />
            </button>
            <button
              type="reset"
              className="my-2 rounded-lg border-2 border-black px-1 "
              onClick={handleClick}
            >
              <img src="/reset.png" alt="リセット画像" width={24} height={24} />
            </button>
          </form>
          <div className="xl:w-76 items-top m-8 flex overflow-hidden rounded-lg border p-2 md:flex-row xl:m-5 xl:ml-12 xl:h-96">
            <ProfileJP />
          </div>
          <div className="xl:w-76 items-top m-8 flex overflow-hidden rounded-lg border p-2 md:flex-row xl:m-5 xl:ml-12 xl:h-96">
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
