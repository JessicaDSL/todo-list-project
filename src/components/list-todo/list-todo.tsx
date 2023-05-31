import { useContext } from 'react';
import { TodoContext } from "../../context/todo-context";
import ListItemTodo from "../list-item-todo/list-item-todo";
import { ListTodoContainer } from "./styles";

function ListTodo() {

  const { currentIndex } = useContext(TodoContext)
  /*{todosLocalStorage.length > 0 ?
        todos?.map((todo) => (
          <ListItemTodo todo={todo} key={todo.id} />
        )) :
        todos?.map((todo) => (
          <ListItemTodo todo={todo} key={todo.id} />
        ))
      }*/

  return (
    <ListTodoContainer>
      {currentIndex?.map((todo) => (
        <ListItemTodo todo={todo} key={todo.id} />
      ))}
    </ListTodoContainer>
  );
}

export default ListTodo;
