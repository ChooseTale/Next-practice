import React from "react";

export default function Title({
  nickName,
  workCount,
}: {
  nickName: string;
  workCount: number;
}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-[237px] h-[87px] bg-blue-500">
        {`${nickName}님 오늘은`}
        <br />
        {`${workCount}개의 할일이 있어요`}
      </div>
      <div className="w-[67px] h-[87px] bg-blue-500">Title</div>
    </div>
  );
}
