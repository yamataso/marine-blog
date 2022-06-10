import React from "react";

export const TableOfContents = ({ toc }: any) => {
  return (
    <div className=" bg-gray-100 rounded-xl block pb-4  lg:w-8/12  sm:pr-12">
      <p className="text-xl font-sans font-semibold m-2 pt-8 pl-4 ">目次</p>
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
