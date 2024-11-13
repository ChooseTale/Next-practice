import React from "react";
import SelectCategory from "./_component/SelectCategory";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center ml-[20px] mr-[20px]">
      <SelectCategory />
      {children}
    </div>
  );
}
