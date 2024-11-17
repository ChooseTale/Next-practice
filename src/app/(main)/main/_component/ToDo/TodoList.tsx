"use client";

import List from "@/components/List";
import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function TodoList({ todoList }: { todoList: Todo[] }) {
  return (
    <div className="ml-[12px] mt-[14px] mb-[20px]">
      {todoList.map((todo) => (
        <div key={todo.id} className="mb-[8px]">
          <List id={todo.id} title={todo.title} isDone={todo.isDone} />
        </div>
      ))}
    </div>
  );
}
