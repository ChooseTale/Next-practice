import { Todo } from "@/store/todo";
import React from "react";

export default function TodoCard({ todoList }: { todoList: Todo[] }) {
  return (
    <div className="flex gap-1 w-full h-full flex-wrap justypy-start bg-backgroundSecondary">
      {todoList.map((todo, index) => (
        <div
          className="flex w-[calc(50%-4px)] h-[300px]  justify-center items-center"
          key={todo.id}
        >
          <div className="flex w-[80%] h-[250px] bg-white rounded-[20px] shadow-md justify-center items-center">
            <p>{todo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
