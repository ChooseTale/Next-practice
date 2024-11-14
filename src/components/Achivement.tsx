"use client";

import React, { useState } from "react";

export default function Achivement({
  width,
  height,
  percentage,
}: {
  width: number;
  height: number;
  percentage: number;
}) {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < percentage) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  const strokeDashoffset = -94.2 + progress * 0.942;

  return (
    <div className="relative">
      <div className="relative flex justify-center items-center w-[67px] h-[67px] ">
        <svg
          className="w-[67px] h-[67px] rotate-0"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth="5"
          ></circle>
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            className="stroke-current text-primary"
            strokeWidth="5"
            strokeDasharray="94.2"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
          ></circle>
        </svg>
      </div>
      <div
        className="absolute top-0 left-0
      text-body-md
      w-full h-[67px]  flex justify-center items-center"
      >
        {percentage}%
      </div>
      <div className="text-caption-md w-full text-center mt-[3px] ">달성도</div>
    </div>
  );
}
/* Ellipse 1 */

// position: absolute;
// width: 67px;
// height: 67px;
// left: 67px;
// top: 67px;

// /* Primary */
// background: #0066FF;
// border-radius: 50px;
// transform: rotate(180deg);
