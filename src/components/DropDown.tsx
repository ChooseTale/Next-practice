"use client";

import React, { useState } from "react";
import Svg from "./Svg";

interface DropDownProps {
  year: number;
  month: number;
}

export default function DropDown({ dateList }: { dateList: DropDownProps[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  p-[6px] pr-[10px] pb-[6px] pl-[10px] flex-col">
      <div
        className="flex w-[110px] h-[32px]
     rounded-[4px]  border border-gray-100

    "
      >
        <div className="flex items-center justify-center ml-[10px] text-body3-md text-textDefault">
          2024년 11월
        </div>
        <div className="flex ml-[4px] ">
          <button onClick={handleOpen}>
            <Svg
              icon="chevronDown"
              options={{ size: { width: 14, height: 14 } }}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex mt-[4px] ">
          <div className="w-[110px] bg-white rounded-[4px] border border-gray-100 shadow-empasize">
            <div className="flex flex-col">
              {dateList.map((date, index) => {
                return (
                  <div
                    key={`${date.year}-${date.month}`}
                    className={`
                      hover:bg-gray-100
                      ${index === 0 ? "rounded-t-[4px]" : ""}
                      ${index === dateList.length - 1 ? "rounded-b-[4px]" : ""}
                    `}
                  >
                    <div className={`flex ml-[10px] text-body3-md `}>
                      {date.year}년 {date.month}월
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
