import FormTodo from "./components/form-todo/form-todo";
import ListTodoPagination from "./components/list-todo-pagination/list-todo-pagination";
import ListTodoScrolling from "./components/list-todo-scrolling/list-todo-scrolling";



function App() {

  return (
    <div>
      <h1>Todo List Project</h1>
      <div className="container">
        <FormTodo />
        <ListTodoPagination />
      </div>
    </div>
  )
}

export default App