import { useContext } from 'react';
import { TodoContext } from "../../context/todo-context";
import ListItemTodo from "../list-item-todo/list-item-todo";
import { ListTodoContainer } from "./styles";
import Pagination from '../pagination/pagination';

function ListTodoPagination() {

  const { currentPage, todos, itensPerPage } = useContext(TodoContext)

  const startIndex = currentPage * itensPerPage//fatiar o array de itens., na page 1, vai ser 1*10
  const endIndex = startIndex + itensPerPage //meu start index é 0, e meus itens por paginas é 10, eu to na 1 
  const currentIndex = todos.slice(startIndex, endIndex)

  return (
    <ListTodoContainer>
      {currentIndex?.map((todo) => (
        <ListItemTodo todo={todo} key={todo.id} />
      ))}
      <Pagination />
    </ListTodoContainer>
  );
}

export default ListTodoPagination;
