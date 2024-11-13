import React from "react";

type SegmentedControlProps = {
  items: {
    text: string;
    isSelected: boolean;
    action: () => void;
  }[];
};

export default function SegmentedControl({ items }: SegmentedControlProps) {
  return (
    <div className="w-[118px] h-[28px] rounded-[9px] items-center justify-center  flex bg-gray-200">
      {items.map((item) => (
        <div
          key={item.text}
          className={`w-[57px] h-[24px] rounded-[7px] items-center justify-center flex  ${
            item.isSelected ? "bg-white shadow-empasize" : ""
          }`}
          onClick={item.action}
        >
          <p className="text-caption-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
