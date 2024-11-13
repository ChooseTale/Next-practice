"use client";

import React from "react";

export default function Achivement({
  width,
  height,
  percentage,
}: {
  width: number;
  height: number;
  percentage: number;
}) {
  return (
    <div className="relative w-[67px] h-[67px]">
      {/* <div className="absolute w-6 h-6 bg-blue-500 rounded-full top-0 left-1/2 -translate-x-1/2"></div> */}
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
