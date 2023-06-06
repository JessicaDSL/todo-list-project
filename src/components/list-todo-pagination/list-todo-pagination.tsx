import { useContext } from 'react';
import { TodoContext } from "../../context/todo-context";
import ListItemTodo from "../list-item-todo/list-item-todo";
import { ListTodoContainer } from "./styles";
import Pagination from '../pagination/pagination';

function ListTodoPagination() {

  const { todos } = useContext(TodoContext)

  return (
    <ListTodoContainer>
      {todos?.map((todo) => (
        <ListItemTodo todo={todo} key={todo.id} />
      ))}
      <Pagination />
    </ListTodoContainer>
  );
}

export default ListTodoPagination;
