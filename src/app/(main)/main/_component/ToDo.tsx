"use client";

import React, { useEffect, useState } from "react";
import Title from "./ToDo/Title";
import TodoList from "./ToDo/TodoList";
import Large from "@/components/buttons/Large";
import BottomSheet from "@/components/BottomSheet";
import CreateTodoSheet from "./ToDo/CreateTodoSheet";

import { useTodoStore } from "@/store/todo";

export default function ToDo() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const { todoList, setTodoListByServer } = useTodoStore();

  useEffect(() => {
    setTodoListByServer();
  }, []);
  return (
    <div className="w-full h-screen mt-[24px] ">
      <Title
        nickName="닉네임"
        workCount={todoList.length}
        isDoneCount={todoList.filter((todo) => todo.isDone).length}
      />

      <div className="flex relative mt-[20px]  h-[468px] rounded-[20px] bg-backgroundSecondary overflow-y-auto z-0">
        <TodoList todoList={todoList} />
      </div>

      <div className="fixed flex left-0   bottom-[20px] justify-center w-full">
        <div className="flex z-50">
          <Large text="새 할일" action={() => setIsBottomSheetVisible(true)} />
        </div>
      </div>

      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
      >
        <CreateTodoSheet />
      </BottomSheet>
    </div>
  );
}
