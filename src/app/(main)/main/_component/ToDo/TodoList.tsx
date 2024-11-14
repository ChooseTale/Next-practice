"use client";

import List from "@/components/List";
import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      title: "할일 1",
      isDone: false,
    },
    {
      id: 2,
      title: "할일 2",
      isDone: true,
    },
    {
      id: 3,
      title: "할일 3",
      isDone: false,
    },
    {
      id: 4,
      title: "할일 4",
      isDone: false,
    },
    {
      id: 5,
      title: "할일 5",
      isDone: true,
    },
    {
      id: 6,
      title: "할일 6",
      isDone: false,
    },
    {
      id: 7,
      title: "할일 7",
      isDone: true,
    },
    {
      id: 8,
      title: "할일 8",
      isDone: false,
    },
    {
      id: 9,
      title: "할일 9",
      isDone: true,
    },
    {
      id: 10,
      title: "할일 10",
      isDone: false,
    },
  ]);

  return (
    <div className="ml-[12px] mt-[14px] mb-[20px]">
      {todoList.map((todo) => (
        <div key={todo.id} className="mb-[8px]">
          <List title={todo.title} isDone={todo.isDone} />
        </div>
      ))}
    </div>
  );
}
