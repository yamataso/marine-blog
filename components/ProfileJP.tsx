import React from "react";

export const ProfileJP = () => {
  return (
    <div className="">
      <h1 className="font-semibold pb-4">プロフィール</h1>
      <img
        className="ml-2 rounded-full"
        src="/profile.png"
        alt="プロフィール画像JP"
        width={100}
        height={100}
      />
      <div className="m-1 ">
        <p className="font-extrabold">JP</p>
        <p className="m-2 pt-1 font-medium">
          【理学療法士✖スポーツ栄養プランナー】20代社会人。
          <br />
          動く・食べる・寝るが人のパフォーマンスを最高に高める事を証明するためにブログ発信しています(
          ^ω^ )
        </p>
      </div>
    </div>
  );
};
