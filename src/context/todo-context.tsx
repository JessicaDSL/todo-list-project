/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect } from 'react';
import { Todo } from '../types/todo';

interface TodoContextType {
  todos: Todo[],
  itens: Todo[],
  currentPage: number,
  itensPerPage: number,
  currentIndex: Todo[],
  deleteTodo: (todo: Todo) => void,
  updateTodo: (todo: Todo) => void,
  addTodo: (todo: Todo) => void,
  setPageValue: (value: any) => void
}

const DEFAULT_VALUE: TodoContextType = {
  todos: [],
  itens: [],
  itensPerPage: 0,
  currentPage: 0,
  currentIndex: [],
  deleteTodo: (todo: Todo) => { console.log(todo) },
  updateTodo: (todo: Todo) => { console.log(todo) },
  addTodo: (todo: Todo) => { console.log(todo) },
  setPageValue: (value: any) => { console.log(value) }
}


export const TodoContext = createContext<TodoContextType>(DEFAULT_VALUE);

const { Provider } = TodoContext;

export const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [itens, setItens] = useState<Todo[]>([]);
  const [itensPerPage, setItensPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

 /* useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:3000/todolist')
      .then(response => response.json())
      .then(data => data)

      setItens(result)
    }
    fetchData()    
  }, [])
*/

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/todolist')
        .then(response => response.json())
        setTodos(response.todos);
    }
    fetchData();
  }, []);


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

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos) ?? '[]');
    }
  }, [todos])

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    setTodos(localTodos);
  }, [])

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://localhost:3000/todolist/", {
        method: 'POST',
        body: JSON.stringify({ todos }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json();
      console.log('result', result);
    }
    fetchPost();
  }, [todos])

  function isValid(todo: Todo): boolean {
    return todo.title != '' || todo.completed === false
  }
  
  const startIndex = currentPage * itensPerPage//fatiar o array de itens., na page 1, vai ser 1*10
  const endIndex = startIndex + itensPerPage //meu start index é 0, e meus itens por paginas é 10, eu to na 1 
  const currentIndex = todos.slice(startIndex, endIndex)

  function setPageValue(value: any) {
    setCurrentPage(Number(value))
  }

  return (
    <Provider value={{ todos, deleteTodo, updateTodo, addTodo, itens, itensPerPage, currentIndex, setPageValue, currentPage }}>
      {props.children}
    </Provider>
  )
}
