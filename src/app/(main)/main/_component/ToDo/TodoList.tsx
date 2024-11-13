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
  ]);

  return (
    <div className="ml-[12px]">
      {todoList.map((todo) => (
        <div key={todo.id} className="mb-[8px]">
          <List title={todo.title} isDone={todo.isDone} />
        </div>
      ))}
    </div>
  );
}
