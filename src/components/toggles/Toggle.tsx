"use client";

import React from "react";

export default function Toggle({
  isSelected,
  action,
}: {
  isSelected: boolean;
  action: (isSelected: boolean) => void;
}) {
  return (
    <div
      className={`w-[39px] h-[24px] rounded-[75px] ${
        isSelected ? "bg-primary" : "bg-gray-200"
      } items-center justify-center flex`}
      onClick={() => action(isSelected)}
    >
      <div
        className={`w-[33px] h-full items-center ${
          isSelected ? "justify-end" : "justify-start"
        } flex`}
      >
        <div className="w-[18px] h-[18px] rounded-full bg-white "></div>
      </div>
    </div>
  );
}
