"use client";

import React from "react";

export default function Large({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <div
      className="w-[121px] h-[48px] rounded-[70px] bg-primary"
      onClick={action}
    >
      {text}
    </div>
  );
}
