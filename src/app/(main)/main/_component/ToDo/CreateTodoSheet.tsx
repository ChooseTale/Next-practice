"use client";

import Save from "@/components/buttons/Save";
import Input from "@/components/input/Input";
import Toggle from "@/components/toggles/Toggle";
import React, { useState } from "react";

export default function CreateTodoSheet() {
  const [isRepeat, setIsRepeat] = useState(false);

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  return (
    <div>
      <div className="mt-[20px] flex justify-end">
        <Save action={() => {}} />
      </div>
      <div className="mt-[24px]">
        <Input label="할 일 명" isDisabled={false} errorReg={/^.{0,18}$/} />
      </div>
      <div className="mt-[24px]">
        <Input label="날짜" isDisabled={false} />
      </div>
      <div className="mt-[24px] w-[320px] flex justify-between">
        반복
        <Toggle isSelected={isRepeat} action={handleRepeat} />
      </div>
    </div>
  );
}
