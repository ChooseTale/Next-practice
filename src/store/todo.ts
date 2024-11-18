import { getUserTodoList } from "@/app/_api/todo";
import { create } from "zustand";

export type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodoStore = {
  todoList: Todo[];
  setTodoListByServer: () => void;
  setIsDone: (id: number, isDone: boolean) => void;
  setTodoDelete: (id: number) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todoList: [],
  setTodoListByServer: () =>
    set(() => ({
      todoList: getUserTodoList(),
    })),
  setIsDone: (id: number, isDone: boolean) =>
    set((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone } : todo
      ),
    })),
  setTodoDelete: (id: number) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
}));
