"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import ToDo from "./_component/ToDo";
import Calendar from "./_component/Calendar";

export default function Page() {
  const searchParams = useSearchParams();

  return (
    <>{searchParams.get("category") === "todo" ? <ToDo /> : <Calendar />}</>
  );
}
