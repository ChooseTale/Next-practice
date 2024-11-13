"use client";

import Svg from "@/components/Svg";
import React from "react";
import DiaryItem from "./_component/Item";

export default function page() {
  const diaryList = [
    {
      id: 1,
      date: "2024.01.01",
      imageLink:
        "https://img.sbs.co.kr/newsnet/etv/upload/2024/04/25/30000922260_1280.jpg",
      content: "짱짱긴 내용".repeat(30),
    },
    {
      id: 2,
      date: "2023.08.22",
      imageLink:
        "https://i.pinimg.com/236x/f9/46/17/f9461762fdb1b5495a67cc9b1fe1974e.jpg",
      content: "별로 안긴 내용",
    },
    {
      id: 3,
      date: "2024.01.03",
      imageLink:
        "https://www.shutterstock.com/image-photo/funny-little-kitten-looks-around-260nw-2512772793.jpg",
      content: "고양이도 넣어보자",
    },
  ];

  return (
    <div>
      <div className="flex justify-start">
        <Svg
          icon="chevronLeft"
          options={{ size: { width: 24, height: 24 }, viewBox: "0 0 24 24" }}
        />
      </div>
      <div className="text-title-bold text-[24px]  w-[320px] mt-[32px]">
        {`닉네임님,`}
        <br />
        <span className="text-sub-bold text-primary">오늘 하루</span>는
        어땠나요?
      </div>
      <div className="mt-[32px]">
        {diaryList.map((diary) => (
          <div key={diary.id} className="mb-[40px]">
            <DiaryItem
              id={diary.id}
              date={diary.date}
              imageLink={diary.imageLink}
              content={diary.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
