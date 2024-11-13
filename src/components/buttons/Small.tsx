import React from "react";

export default function Small({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <div
      className="w-[62px] h-[34px] rounded-[6px] justify-center items-center flex bg-primary"
      onClick={action}
    >
      <p className="text-body3-md text-white">{text}</p>
    </div>
  );
}
