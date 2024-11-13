"use client";

import SegmentedControl from "@/components/SegmentedControl";
import React from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
export default function SelectCategory() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (category: string) => {
    router.push(`/main?category=${category}`);
  };

  if (
    searchParams.get("category") !== "todo" &&
    searchParams.get("category") !== "calendar"
  )
    throw new Error("Invalid category");

  return (
    <SegmentedControl
      items={[
        {
          text: "투두",
          isSelected: searchParams.get("category") === "todo",
          action: () => handleClick("todo"),
        },
        {
          text: "캘린더",
          isSelected: searchParams.get("category") === "calendar",
          action: () => handleClick("calendar"),
        },
      ]}
    />
  );
}
