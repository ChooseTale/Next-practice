"use client";

import React, { useState } from "react";
import Title from "./ToDo/Title";
import TodoList from "./ToDo/TodoList";
import Large from "@/components/buttons/Large";
import BottomSheet from "@/components/BottomSheet";
import CreateTodoSheet from "./ToDo/CreateTodoSheet";

export default function ToDo() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  return (
    <div className="w-full h-screen mt-[24px] ">
      <Title nickName="닉네임" workCount={10} />
      <TodoList />
      <div className="fixed flex left-0   bottom-[20px] justify-center w-full">
        <div className="flex">
          <Large text="새 할일" action={() => setIsBottomSheetVisible(true)} />
        </div>
      </div>

      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        children={<CreateTodoSheet />}
      ></BottomSheet>
    </div>
  );
}
