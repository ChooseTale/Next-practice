import React from "react";
import Title from "./ToDo/Title";

export default function ToDo() {
  return (
    <div className="w-full h-screen mt-[24px] bg-red-500">
      <Title nickName="닉네임" workCount={10} />
    </div>
  );
}
