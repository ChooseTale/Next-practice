"use client";

import React, { useState } from "react";

export default function UseDropdown(initValue: string) {
  const [selectedOption, setSelectedOption] = useState(initValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return [selectedOption, handleChange];
}
