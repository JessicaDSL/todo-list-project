/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { getAlphabeticalOrder, getOrderByCompleteTodo } from '../utils/utils';

interface TodoContextType {
  todos: Todo[],
  currentPage: number,
  itensPerPage: number,
  deleteTodo: (todo: Todo) => void,
  updateTodo: (todo: Todo) => void,
  addTodo: (todo: Todo) => void,
  setPageValue: (value: any) => void,
}

const DEFAULT_VALUE: TodoContextType = {
  todos: [],
  itensPerPage: 0,
  currentPage: 0,
  deleteTodo: (todo: Todo) => { console.log(todo) },
  updateTodo: (todo: Todo) => { console.log(todo) },
  addTodo: (todo: Todo) => { console.log(todo) },
  setPageValue: (value: any) => { console.log(value) },
}


export const TodoContext = createContext<TodoContextType>(DEFAULT_VALUE);

const { Provider } = TodoContext;

export const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const getTodoByPage = async () => {
    const response = await fetch(`http://localhost:3000/todolist?_page=${currentPage}&_limit=${itensPerPage}`);
    const data = await response.json();
    console.log('data', data);
    setTodos(data);
  }


  useEffect(() => {
    getTodoByPage()
  }, [currentPage])



  const apiAddTodo = async (todo: Todo) => {
    const response = await fetch("http://localhost:3000/todolist", {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = response.json()
  }

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  function updateTodo(todo: Todo) {
    setTodos(todos.map(item => item.id === todo.id ? todo : item))
  }

  function addTodo(todo: Todo) {
    if (isValid(todo)) {
      setTodos([todo, ...todos]);
    }
    apiAddTodo(todo);
  }


  function isValid(todo: Todo): boolean {
    return todo.title != '' || todo.completed === false
  }

  function setPageValue(value: any) {
    setCurrentPage(Number(value) + 1);
  }

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos) ?? '[]');
    }
  }, [todos])

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    setTodos(localTodos);
  }, [])


  return (
    <Provider value={{ todos, deleteTodo, updateTodo, addTodo, itensPerPage, setPageValue, currentPage }}>
      {props.children}
    </Provider>
  )
}
