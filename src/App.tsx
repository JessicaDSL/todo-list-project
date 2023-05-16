import FormTodo from "./components/form-todo/form-todo";
import ListTodo from "./components/list-todo/list-todo";

function App() {
  
  return (
    <div>
      <h1>Todo List Project</h1>
      <div className="container">
        <FormTodo />
        <ListTodo />
      </div>
    </div>
  )
}

export default App