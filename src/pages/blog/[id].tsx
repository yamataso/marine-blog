import React from "react";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "..";
import { client } from "../../libs/client";
import { ProfileJP } from "../../../components/ProfileJP";
import { ProfileYama } from "../../../components/ProfileYama";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="ml-40 pl-4 ">
      <div className="min-w-max">
        <h1 className=" py-4 text-4xl font-bold">{props.title}</h1>

        <time dateTime={props.publishedAt} className="my-2 py-2 block">
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
        <hr className="my-10 mr-20" />
        {/* <p>{props.category && `${props.category.name}`}</p> */}

        <div className=" flex">
          <article
            className=" prose  prose-headings:container  m-4 p-2"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          <div className="ml-10 pl-5">
            <div className="m-5 mt-4 ml-12 p-2 flex  w-80 h-96  md:flex-row items-top border rounded-lg overflow-hidden">
              <ProfileJP />
            </div>
            <div className="m-5 mt-4 ml-12 p-2 flex  w-80 h-96  md:flex-row items-top border rounded-lg overflow-hidden">
              <ProfileYama />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;
