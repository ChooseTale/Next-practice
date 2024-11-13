import Image from "next/image";
import React from "react";
import ItemContent from "./ItemContent";
import CreateDiary from "./CreateDiary";

type DiaryItemProps = {
  id: number;
  date: string;
  imageLink: string;
  content: string;
};

export default function DiaryItem({
  id,
  date,
  imageLink,
  content,
}: DiaryItemProps) {
  return (
    <div>
      <div className="text-title2-md">{date}</div>
      {/* 이미지 박스 */}
      <div className="min-w-[320px] mt-[8px] rounded-[8px] aspect-square  relative">
        <Image
          style={{ borderRadius: "8px" }}
          src={imageLink}
          alt="diary"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-[8px]">
        <ItemContent content={content} />
      </div>
      <CreateDiary />
    </div>
  );
}
