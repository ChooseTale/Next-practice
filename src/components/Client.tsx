"use client";

import React from "react";
import Large from "./buttons/Large";
import Small from "./buttons/Small";
import Save from "./buttons/Save";

export default function Client() {
  return (
    <div>
      <Large
        text="Label"
        action={() => {
          console.log("clicked");
        }}
      />
      <Small text="Label" action={() => {}} />
      <Save action={() => {}} />
    </div>
  );
}
