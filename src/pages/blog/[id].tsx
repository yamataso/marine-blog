import React from "react";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "..";
import { client } from "../../libs/client";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="ml-40 pl-4">
      <h1 className=" py-4 text-4xl font-bold">{props.title}</h1>

      <time dateTime={props.publishedAt} className="my-2 py-2 block">
        {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <hr className="my-10 mr-20" />
      {/* <p>{props.category && `${props.category.name}`}</p> */}

      <article
        className=" prose  prose-headings:container "
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
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
