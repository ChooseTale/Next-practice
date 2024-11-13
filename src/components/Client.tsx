"use client";

import React, { useState } from "react";
import Large from "./buttons/Large";
import Small from "./buttons/Small";
import Save from "./buttons/Save";
import SegmentedControl from "./SegmentedControl";
import Toggle from "./toggles/Toggle";
import Input from "./input/Input";

export default function Client() {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = (isSelected: boolean) => {
    setIsSelected(!isSelected);
  };

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
      <SegmentedControl
        items={[
          { text: "Label1", isSelected: true, action: () => {} },
          { text: "Label2", isSelected: false, action: () => {} },
        ]}
      />
      <Toggle isSelected={isSelected} action={handleToggle} />
      <Input
        label="Label"
        isDisabled={false}
        errorReg={/^[가-힣]+$/}
        errorMessage="error"
        handleValue={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}
