import { useRef, useState } from "react"
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck } from "react-icons/ai";

interface Todo {
  id: number;
  title: string | undefined; // pode ser um ou pode ser outro
  completed: boolean;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const tituloRef = useRef<HTMLInputElement>(null);



  function addTodo(todo: Todo) {
    console.log(todo);
    if (isValid(todo)) {
      setTodos([...todos, todo])
    }
  }
  //clique => handleTodo => AddTodo
  function handleAddTodo() {
    const todo = {
      id: Math.random() * 1000,
      title: tituloRef?.current?.value || '',
      completed: false
    }
    addTodo(todo)
    clearInputTodo();
    console.log(todo);
  }

  function isValid(todo: Todo): boolean {
    return todo.title != '' || todo.completed === false
  }

  function clearInputTodo() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    tituloRef.current!.value = ''
  }

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  function handleDeleteTodo(todo: Todo) {
    deleteTodo(todo)
  }

  function updateTodo(todo: Todo) {
    setTodos(todos.map(item => item.id === todo.id ? todo : item))
  }

  function handleToggleCompleted(todo: Todo) {
    const newTodo = { ...todo, completed: !todo.completed }
    updateTodo(newTodo)
  }


  return (
    <div>
      <h1>Todo List Project</h1>
      <div className="container">
        <div className="formDiv">
          <input ref={tituloRef} type='text' id="inputText" placeholder='Insira a nova tarefa' />
          <button onClick={handleAddTodo}>+</button>
        </div>

        {todos.map((item) =>
          <ul key={item.id}>
            <li  key={item.id}>
              {item.title}
              <div>
                <button onClick={() => handleToggleCompleted(item)}><AiOutlineCheck color="#F4FFFD" /></button>
                <button onClick={() => handleDeleteTodo(item)}><FaTrash color="#F4FFFD" /></button>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default App