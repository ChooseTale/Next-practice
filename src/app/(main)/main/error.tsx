"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function error() {
  const router = useRouter();

  return (
    <div>
      <h1>error</h1>
    </div>
  );
}
