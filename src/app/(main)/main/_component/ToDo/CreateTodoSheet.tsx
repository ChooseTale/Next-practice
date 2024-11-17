"use client";

import { createUserTodo, userTodoList } from "@/app/_api/todo";
import Save from "@/components/buttons/Save";
import Input from "@/components/input/Input";
import Toggle from "@/components/toggles/Toggle";
import { useTodoStore } from "@/store/todo";
import React, { useState } from "react";

export default function CreateTodoSheet({
  handleClickSaveButton,
}: {
  handleClickSaveButton: () => void;
}) {
  const [isRepeat, setIsRepeat] = useState(false);

  const [newTodoData, setNewTodoData] = useState({
    title: "",
    date: "",
    isRepeat: false,
  });

  const { setTodoListByServer } = useTodoStore();
  const handleNewTodoSave = () => {
    createUserTodo(1, {
      id: userTodoList.length + 1,
      title: newTodoData.title,
      isDone: false,
    });
    setTodoListByServer();
    setNewTodoData({
      title: "",
      date: "",
      isRepeat: false,
    });
    handleClickSaveButton();
  };

  const handleTitle = (value: string) => {
    setNewTodoData({ ...newTodoData, title: value });
  };

  const handleDate = (value: string) => {
    setNewTodoData({ ...newTodoData, date: value });
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  return (
    <div>
      <div className="mt-[20px] flex justify-end">
        <Save action={handleNewTodoSave} />
      </div>
      <div className="mt-[24px]">
        <Input
          height={48}
          label="할 일 명"
          isDisabled={false}
          errorReg={/^.{0,18}$/}
          handleValue={handleTitle}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          height={48}
          label="날짜"
          isDisabled={false}
          handleValue={handleDate}
        />
      </div>
      <div className="mt-[24px] w-[320px] flex justify-between">
        반복
        <Toggle isSelected={isRepeat} action={handleRepeat} />
      </div>
    </div>
  );
}
