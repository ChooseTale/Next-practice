import React from "react";

export default function Save({ action }: { action: () => void }) {
  return (
    <div
      className="w-[36px] h-[30px]  justify-center items-center flex"
      onClick={action}
    >
      <p className="text-body-sm text-primary">저장</p>
    </div>
  );
}
