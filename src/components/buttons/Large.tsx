"use client";

import React from "react";
import Svg from "../Svg";

export default function Large({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <div
      className="w-[121px] h-[48px] rounded-[70px] justify-center items-center flex bg-primary"
      onClick={action}
    >
      <Svg
        icon="plus"
        options={{ color: "white", size: { width: 20, height: 20 } }}
      />

      <p className="ml-[6px] text-body-sm text-white">{text}</p>
    </div>
  );
}
