/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';
import { Todo } from '../types/todo';

interface TodoContextType {
  todos: Todo[],
  deleteTodo: (todo: Todo) => void,
  updateTodo: (todo: Todo) => void,
  addTodo: (todo: Todo) => void
}


//funcionar com local storage
//funcionar exibindo somente 10 todo por vez
//criar um componente scrolling
//criar um componente que vai permitir alternar entre um e outro
//criar um json server pra criar um api, ao inves de buscar pelo local storage, buscr pelo json server
//


const DEFAULT_VALUE: TodoContextType = {
  todos: [],
  deleteTodo: (todo: Todo) => {console.log(todo)},
  updateTodo: (todo: Todo) => {console.log(todo)},
  addTodo: (todo: Todo) => {console.log(todo)}
}

export const TodoContext = createContext<TodoContextType>(DEFAULT_VALUE);

const {Provider} = TodoContext;

export const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  function updateTodo(todo: Todo) {
    setTodos(todos.map(item => item.id === todo.id ? todo : item))
  }

  function addTodo(todo: Todo) {
    if (isValid(todo)) {
      setTodos([...todos, todo]);
    }
  }

  function isValid(todo: Todo): boolean {
    return todo.title != '' || todo.completed === false
  }

  return(
    <Provider value={{todos, deleteTodo, updateTodo, addTodo}}>
      {props.children}
    </Provider>
  )
}
