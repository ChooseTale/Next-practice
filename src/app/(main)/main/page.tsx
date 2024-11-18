"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import ToDo from "./_component/ToDo";
import Calendar from "./_component/Calendar/Calendar";

function Content() {
  "use client";
  const searchParams = useSearchParams();
  return searchParams.get("category") === "todo" ? <ToDo /> : <Calendar />;
}

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
