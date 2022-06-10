import React from "react";

export const ProfileJP = () => {
  return (
    <div>
      <h1 className="pb-4 font-semibold">プロフィール</h1>
      <img
        className="ml-2 rounded-full"
        src="/JP.png"
        alt="プロフィール画像JP"
        width={100}
        height={100}
      />

      <p className="font-extrabold">JP</p>
      <p className="m-2 overflow-hidden pt-1  font-medium">
        【理学療法士✖スポーツ栄養プランナー】20代社会人。
        <br />
        動く・食べる・寝るが人のパフォーマンスを最高に高める事を証明するためにブログ発信しています(
        ^ω^ )
      </p>
    </div>
  );
};
