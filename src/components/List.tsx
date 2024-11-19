"use client";

import React, { useState } from "react";
import CheckBoxEmpty from "./CheckBoxEmpty";
import useCheckbox from "@/hooks/UseCheckbox";
import { useTodoStore } from "@/store/todo";
import { deleteUserTodo, updateUserTodo } from "@/app/_api/todo";

export default function List({
  id,
  title,
  isDone,
}: {
  id: number;
  title: string;
  isDone: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsDone, setTodoDelete } = useTodoStore();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteButton = () => {
    setTodoDelete(id);
  };

  const { isChecked, handleCheckboxClick } = useCheckbox(isDone);

  return (
    <div className="flex w-full   relative overflow-hidden ">
      <div className=" bg-red-300 h-[50px]  flex    ">
        <div
          className={`flex absolute justify-center items-center transition-transform duration-300 ease-in-out w-full h-[50px] rounded-[8px] bg-white  z-10  ${
            isOpen ? "translate-x-[-56px]" : ""
          }`}
        >
          <div
            className={`text-body1-md w-full  ml-[10px] ${
              isChecked ? "text-textTertiary" : ""
            }`}
            onClick={handleClick}
          >
            {title}
          </div>
          <div className="flex ml-[8px] mr-[13px]">
            <CheckBoxEmpty
              isChecked={isChecked}
              handleCheckboxClick={() => {
                setIsDone(id, !isDone);
                updateUserTodo(id, {
                  id: id,
                  title: title,
                  isDone: !isDone,
                });
                handleCheckboxClick();
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={` absolute w-[100px] h-[48px] top-[1px] right-[0px] rounded-[8px] justify-end bg-systemRed flex items-center  transition-opacity duration-300 ease-in-out `}
      >
        <div
          className="text-body3-md text-white mr-[12px]"
          onClick={() => {
            handleDeleteButton();
            deleteUserTodo(id);
          }}
        >
          삭제
        </div>
      </div>
    </div>
  );
}
