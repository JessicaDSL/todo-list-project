import { useState } from "react"

import FormTodo from "./components/form-todo/form-todo";
import { Todo } from "./types/todo";
import ListTodo from "./components/list-todo/list-todo";


function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    if (isValid(todo)) {
      setTodos([...todos, todo]);
    }
  }

  //clique => handleTodo => AddTodo
  //ja que usa duas vezes a função, pode colocar no useContext

  function isValid(todo: Todo): boolean {
    return todo.title != '' || todo.completed === false
  }

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  function updateTodo(todo: Todo) {
    setTodos(todos.map(item => item.id === todo.id ? todo : item))
  }

  return (
    <div>
      <h1>Todo List Project</h1>
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <ListTodo 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
          todos={todos}
        />
      </div>
    </div>
  )
}

export default App