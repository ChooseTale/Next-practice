import Image from "next/image";
import React from "react";
import ItemContent from "./ItemContent";
import CreateDiary from "./CreateDiary";
import ImageNull from "@/components/Image-null";

type DiaryItemProps = {
  id: number;
  date: string;
  imageLink: string | null;
  content: string;
};

export default function DiaryItem({
  id,
  date,
  imageLink,
  content,
}: DiaryItemProps) {
  return (
    <>
      <div className="text-title2-md">{date}</div>
      {/* 이미지 박스 */}
      <div className="min-w-[320px] min-h-[320px] mt-[8px] rounded-[8px] aspect-square  relative">
        {imageLink ? (
          <Image
            style={{ borderRadius: "8px" }}
            src={imageLink}
            alt="diary"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <ImageNull width={320} height={320} isRounded={true} />
        )}
      </div>
      <div className="mt-[8px]">
        <ItemContent content={content} />
      </div>
      <CreateDiary />
    </>
  );
}
