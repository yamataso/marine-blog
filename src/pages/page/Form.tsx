import React from "react";
const Form = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            連絡フォーム
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            ブログに関する質問やご意見等大歓迎です。
          </p>
        </div>
        {/* <!-- text - end --> */}

        {/* <!-- form - start --> */}
        <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
          <div className="sm:col-span-2">
            <label
              htmlFor="ニックネーム"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              ニックネーム
            </label>
            <input
              name="company"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Email*
            </label>
            <input
              name="email"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="メッセージ記入欄"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              メッセージ記入欄
            </label>
            <textarea
              name="message"
              className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-between items-center">
            <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Send
            </button>

            <span className="text-gray-500 text-sm">*Required</span>
          </div>
        </form>
        {/* <!-- form - end --> */}
      </div>
    </div>
  );
};
export default Form;
