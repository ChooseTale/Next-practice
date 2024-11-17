"use client";

import Achivement from "@/components/Achivement";
import React, { useEffect, useState } from "react";

export default function Title({
  nickName,
  workCount,
  isDoneCount,
}: {
  nickName: string;
  workCount: number;
  isDoneCount: number;
}) {
  const [percentage, setPercentage] = useState(0);
  console.log(isDoneCount, workCount);
  useEffect(() => {
    setPercentage(Math.floor((isDoneCount / workCount) * 100));
  }, [isDoneCount, workCount]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-[237px] h-[87px]  text-title-bold">
        {`${nickName}님 오늘은`}
        <br />
        <span className="text-primary">{`${workCount - isDoneCount}개`}</span>
        {`의 할일이 있어요`}
      </div>
      <div className="relative">
        <Achivement
          width={67}
          height={67}
          percentage={percentage}
          viewBox="0 0 36 36"
          circle={{ cx: 18, cy: 18, r: 15, strokeWidth: 5 }}
        />
        <div
          className="absolute top-0 left-0
      text-body-md
      w-full h-[67px]  flex justify-center items-center"
        >
          {`${percentage}%`}
        </div>
        <div className="text-caption-md w-full text-center mt-[3px] ">
          달성도
        </div>
      </div>
    </div>
  );
}

/* Ellipse 3 */
