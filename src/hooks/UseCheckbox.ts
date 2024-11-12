import { useState } from "react";

export default function useCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return { isChecked, handleCheckboxClick };
}
