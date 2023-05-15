import { Todo } from "../../types/todo";
import ListItemTodo from "../list-item-todo/list-item-todo";
import { ListTodoContainer } from "./styles";


interface TodoListProps {
  updateTodo: (todo: Todo) => void,
  deleteTodo: (todo: Todo) => void,
  todos: Todo[]
}


function ListTodo(props: TodoListProps) {

  const { updateTodo, deleteTodo, todos } = props

  return (
    <ListTodoContainer>
      {todos?.map((todo) => (
        <ListItemTodo
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          todo={todo}
        />
      ))}
    </ListTodoContainer>
  );
}

export default ListTodo;
