"use client";
import Save from "@/components/buttons/Save";
import ImageNull from "@/components/Image-null";
import Input from "@/components/input/Input";
import Svg from "@/components/Svg";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between h-[48px]">
        <div>
          <Svg
            icon="chevronLeft"
            options={{ size: { width: 24, height: 24 } }}
          />
        </div>
        <div>
          <Save action={() => {}} />
        </div>
      </div>
      <div className="h-[320px] mt-[20px]">
        <ImageNull width={320} height={320} isRounded={false} />
      </div>
      <div className="mt-[32px] w-full">
        <Input
          label="내용"
          isDisabled={false}
          height={168}
          errorReg={undefined}
          errorMessage={undefined}
          handleValue={(value) => {
            console.log(value);
          }}
        />
      </div>
    </>
  );
}
