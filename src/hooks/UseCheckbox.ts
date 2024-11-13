import { useState } from "react";

export default function useCheckbox(isDone: boolean) {
  const [isChecked, setIsChecked] = useState(isDone);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return { isChecked, handleCheckboxClick };
}
