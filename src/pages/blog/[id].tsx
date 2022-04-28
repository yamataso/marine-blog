import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "..";
import React from "react";
import { client } from "../../libs/client";
import dayjs from "dayjs";
import { TypographyStylesProvider } from "@mantine/core";

type Props = Blog & MicroCMSContentId & MicroCMSDate;
const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <h1 className=" font-bold text-4xl mt-4">{props.title}</h1>
      <time className=" block mt-4" dateTime={props.publishedAt}>
        {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
      </TypographyStylesProvider>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
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
    return {
      notFound: true,
    };
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
