"use client";

import React from "react";
import Large from "./buttons/Large";

export default function Client() {
  return (
    <div>
      <Large
        text="Label"
        action={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}
