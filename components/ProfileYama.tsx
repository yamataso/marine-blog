import React from "react";

export const ProfileYama = () => {
  return (
    <div className="">
      <h1 className="font-semibold pb-4">プロフィール</h1>
      <img
        className="ml-2 rounded-full"
        src="/Me.png"
        alt="プロフィール画像JP"
        width={100}
        height={100}
      />
      <div className="m-1 ">
        <p className="font-extrabold">Yama</p>
        <p className="m-3 pt-2">
          【独学プログラマー】
          <br />
          20代フリーター。フロントエンドエンジニア志望。
          <br />
          「地元で暮らしながら、都会の企業勤め」を目標に誠意勉強中です！
        </p>
      </div>
    </div>
  );
};
