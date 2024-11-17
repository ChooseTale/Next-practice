import { Todo } from "@/store/todo";

export const userTodoList = [
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
  {
    id: 11,
    title: "할일 11",
    isDone: false,
  },
];

export const getUserTodoList: (userId: number) => Todo[] = (userId: number) => {
  return userTodoList;
};

export const createUserTodo = (userId: number, todo: Todo) => {
  return userTodoList.push(todo);
};
