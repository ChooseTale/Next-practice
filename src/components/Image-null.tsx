import React from "react";
import Svg from "./Svg";

export default function ImageNull({
  width,
  height,
  isRounded,
}: {
  width: number;
  height: number;
  isRounded?: boolean;
}) {
  return (
    <div
      className={`w-[${width}px] h-full ${
        isRounded ? "rounded-[8px]" : ""
      } bg-gray-200 flex justify-center items-center`}
    >
      <Svg
        icon="camera"
        options={{ size: { width: 48, height: 48 }, color: "gray400" }}
      />
    </div>
  );
}
