import FormTodo from "./components/form-todo/form-todo";
import ListTodoPagination from "./components/list-todo-pagination/list-todo-pagination";

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
