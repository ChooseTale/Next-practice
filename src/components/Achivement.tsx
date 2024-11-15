"use client";

import React, { useState } from "react";

export default function Achivement({
  width,
  height,
  percentage,
  viewBox,
  circle,
}: {
  width: number;
  height: number;
  percentage: number;
  viewBox: string;
  circle: {
    cx: number;
    cy: number;
    r: number;
    strokeWidth: number;
  };
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

  const strokeDashoffset = -2 * Math.PI * circle.r * (1 - progress / 100);

  return (
    <div className="relative">
      <div
        className={`relative flex justify-center items-center w-[${width}px] h-[${height}px] `}
      >
        <svg
          className={`w-[${width}px] h-[${height}px] rotate-0`}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth={circle.strokeWidth}
          ></circle>
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="none"
            className="stroke-current text-primary"
            strokeWidth={circle.strokeWidth}
            strokeDasharray={2 * Math.PI * circle.r}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
          ></circle>
        </svg>
      </div>
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
