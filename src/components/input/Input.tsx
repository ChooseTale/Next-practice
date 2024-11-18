"use client";

import React, { useState } from "react";

export default function Input({
  label,
  isDisabled,
  height,
  errorReg,
  errorMessage,

  handleValue,
}: {
  label: string;
  isDisabled: boolean;
  height: number;
  errorReg?: RegExp;
  errorMessage?: string;
  handleValue: (value: string) => void;
}) {
  // const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  const handleError = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!errorReg) return;
    if (!errorReg.test(e.target.value) && e.target.value !== "") {
      setIsError(true);
    } else {
      setIsError(false);
      handleValue?.(e.target.value);
    }
  };

  return (
    <div className="w-[320px]">
      <div
        className={`w-[320px] h-[22px] text-body-md ${
          isDisabled ? "text-textTertiary" : "text-textDefault"
        }`}
      >
        {label ?? "label"}
      </div>
      <div className="mt-[8px]">
        <textarea
          style={{ overflow: "hidden" }}
          className={`w-[320px] h-[${height}px] border-[1px] border-gray-200 text-body-md rounded-[6px] pt-[13px] pr-[10px] pb-[13px] pl-[10px]

            ${isError ? "border-systemRed" : "border-gray-200"}
            ${isDisabled ? "text-textTertiary" : "text-textDefault"}`}
          placeholder="입력해주세요."
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          disabled={isDisabled}
          onChange={(value) => {
            handleValue(value.target.value);
            handleError(value);
          }}
        />
      </div>
      {isError && (
        <div className="text-systemRed  text-caption-md">
          {errorMessage ?? "error"}
        </div>
      )}
    </div>
  );
}
