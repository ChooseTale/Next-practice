import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import Achivement from "@/components/Achivement";
import { useRouter } from "next/navigation";
import DropDown from "@/components/DropDown";

export default function CalendarSheet() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(new Date());

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === new Date().getMonth();
  };
  return (
    <>
      <div className="w-full text-title-bold mt-[28px]">
        {currentDate.getMonth() + 1}월에는 100%를 <br />
        <span className="text-primary">10번</span> 달성했어요
      </div>
      <div className="w-full mt-[44px]">
        <DropDown
          dateList={[
            {
              year: currentDate.getFullYear(),
              month: currentDate.getMonth(),
            },
            {
              year: currentDate.getFullYear(),
              month: currentDate.getMonth() + 1,
            },
            {
              year: currentDate.getFullYear(),
              month: currentDate.getMonth() + 2,
            },
          ]}
        />
      </div>
      <Calendar
        showNavigation={false}
        // showNeighboringMonth={false}
        formatShortWeekday={(locale, date) => {
          return "";
        }}
        tileContent={({ date, view }) => {
          if (isCurrentMonth(date)) {
            return (
              <>
                <Achivement
                  width={28}
                  height={28}
                  percentage={30}
                  viewBox="0 0 18 18"
                  circle={{ cx: 9, cy: 9, r: 7, strokeWidth: 3.5 }}
                />
              </>
            );
          }
        }}
        onClickDay={(value) => {
          if (isCurrentMonth(value)) {
            router.push(`/main/diary/${value.toISOString().split("T")[0]}`);
          }
          return;
        }}
      />
    </>
  );
}
