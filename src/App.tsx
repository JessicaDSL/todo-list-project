import { useEffect, useState } from "react";
import FormTodo from "./components/form-todo/form-todo";
import ListTodo from "./components/list-todo/list-todo";
import Pagination from "./components/pagination/pagination";



function App() {



  return (
    <div>
      <h1>Todo List Project</h1>
      <div className="container">
        <FormTodo />
        <ListTodo />
        <Pagination />
      </div>
    </div>
  )
}

export default App