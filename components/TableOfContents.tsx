import React from "react";

export const TableOfContents = ({ toc }: any) => {
  return (
    <div className=" block rounded-xl bg-gray-100 pb-4  sm:pr-12  lg:w-8/12">
      <p className="m-2 pt-8 pl-4 font-sans text-xl font-semibold ">目次</p>
      <nav>
        <ul className="m-4 pl-4">
          {toc.map((data: { id: number; text: string }) => (
            <li key={data.id} className="m-2 ">
              <a className="rounded-xl " href={`#${data.text}`}>
                {data.text}
              </a>
              <hr />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
