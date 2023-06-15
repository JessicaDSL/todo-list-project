/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { Todo } from "../types/todo";

export function useLocalStorage(todos: Todo[], callBack: Function) {
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos) ?? '[]');
    }
  }, [todos])
  
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    callBack(localTodos);
  }, [])
}


