import React from "react";
const Form = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            連絡フォーム
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            ブログに関する質問やご意見等大歓迎です。
          </p>
        </div>
        {/* <!-- text - end --> */}

        {/* <!-- form - start --> */}
        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="ニックネーム"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              ニックネーム
            </label>
            <input
              name="company"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="メッセージ記入欄"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              メッセージ記入欄
            </label>
            <textarea
              name="message"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Send
            </button>

            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
        {/* <!-- form - end --> */}
      </div>
    </div>
  );
};
export default Form;
