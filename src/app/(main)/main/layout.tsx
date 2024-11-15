import React from "react";
import SelectCategory from "./_component/SelectCategory";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center justify-center mt-[16px] ">
      <SelectCategory />
      {children}
    </div>
  );
}
