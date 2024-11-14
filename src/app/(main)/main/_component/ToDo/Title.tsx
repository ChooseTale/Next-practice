"use client";

import Achivement from "@/components/Achivement";
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
      <div className="w-[237px] h-[87px]  text-title-bold">
        {`${nickName}님 오늘은`}
        <br />
        <span className="text-primary">{`${workCount}개`}</span>
        {`의 할일이 있어요`}
      </div>
      <Achivement width={67} height={67} percentage={80} />
    </div>
  );
}

/* Ellipse 3 */
