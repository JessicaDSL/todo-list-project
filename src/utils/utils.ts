import { useContext } from "react";
import { Todo } from "../types/todo"

function getAlphabeticalOrder(listTodos: any) {
  listTodos.sort((a: Todo, b: Todo) => {
    if (a.title < b.title) {
      return -1
    }
    if (a > b) {
     return 1
    }
    return 0
  })
  console.log(listTodos);
}

function getOrderByCompleteTodo(listTodos: any) {
  listTodos.sort((a: Todo, b: Todo) => Number(b.completed) - Number(a.completed))
  console.log(listTodos);
}

export {getAlphabeticalOrder, getOrderByCompleteTodo}