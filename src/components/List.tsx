"use client";

import React, { useState } from "react";
import CheckBoxEmpty from "./CheckBoxEmpty";
import useCheckbox from "@/hooks/UseCheckbox";

export default function List() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteButton = () => {
    console.log("삭제");
  };

  const { isChecked, handleCheckboxClick } = useCheckbox();
  console.log(isChecked);
  return (
    <div className="flex overflow-hidden ">
      <div className="w-[296px] h-[50px]  flex    ">
        <div
          className={`flex absolute justify-center items-center transition-transform duration-300 ease-in-out w-[296px] h-[50px] rounded-[8px] bg-white  z-10  ${
            isOpen ? "translate-x-[-50px]" : ""
          }`}
        >
          <div
            className={`text-body1-md  ml-[10px] ${
              isChecked ? "text-textTertiary" : ""
            }`}
            onClick={handleClick}
          >
            하나둘셋넷다여일곱여덟ㅅ아옵열열하나
          </div>
          <div className="flex ml-[8px]">
            <CheckBoxEmpty
              isChecked={isChecked}
              handleCheckboxClick={handleCheckboxClick}
            />
          </div>
        </div>
      </div>

      <div
        className={` absolute w-[100px] h-[50px] left-[195px] rounded-[8px] justify-end bg-systemRed flex items-center  transition-opacity duration-300 ease-in-out `}
      >
        <div
          className="text-body3-md text-white mr-[12px]"
          onClick={handleDeleteButton}
        >
          삭제
        </div>
      </div>
    </div>
  );
}
