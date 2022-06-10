import React from "react";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "..";
import { client } from "../../libs/client";
import { ProfileJP } from "../../../components/ProfileJP";
import { ProfileYama } from "../../../components/ProfileYama";
import { renderToc } from "../../libs/render-toc";
import { TableOfContents } from "../../../components/TableOfContents";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const toc = renderToc(props.body);

  return (
    <div className="lg:ml-40 lg:pl-4 ">
      <div className="md:min-w-max">
        <h1 className=" py-4 text-4xl font-bold">{props.title}</h1>

        <time dateTime={props.publishedAt} className="my-2 block py-2">
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
        {props.tocvisible && <TableOfContents toc={toc} />}
        <hr className="my-10 mr-20" />
        <div className=" lg:flex">
          <article
            className="prose m-4 p-2 prose-headings:container prose-headings:rounded-lg prose-headings:bg-gray-100  prose-headings:p-4 prose-img:mt-0 prose-img:h-96 prose-img:w-96    prose-img:rounded-xl "
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          <div className=" lg:ml-10 lg:pl-5">
            <div className="items-top m-5 mt-4 flex h-96  w-80 overflow-hidden  rounded-lg border p-2 sm:ml-12 md:flex-row">
              <ProfileJP />
            </div>
            <div className="items-top m-5 mt-4 flex h-96  w-80 overflow-hidden  rounded-lg border p-2 sm:ml-12 md:flex-row">
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
