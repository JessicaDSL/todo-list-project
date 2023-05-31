import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck } from "react-icons/ai";
import { Todo } from '../../types/todo';
import { ListItemContainer, ButtonTodoItem, ButtonContainer } from './styles';
import { TodoContext } from '../../context/todo-context';

interface TodoItemProps {
  todo: Todo
}

function ListItemTodo({todo}: TodoItemProps) {

  const { updateTodo, deleteTodo } = useContext(TodoContext)

  function handleToggleCompleted(todo: Todo) {
    const newTodo = { ...todo, completed: !todo.completed }
    updateTodo(newTodo)
  }

  function handleDeleteTodo(todo: Todo) {
   deleteTodo(todo)
  }

  return (
    <ListItemContainer>
      {todo.title}
      <ButtonContainer>
        <ButtonTodoItem onClick={() => handleToggleCompleted(todo)}>
          <AiOutlineCheck color="#F4FFFD" />
        </ButtonTodoItem>
        <ButtonTodoItem onClick={() => handleDeleteTodo(todo)}>
          <FaTrash color="#F4FFFD" />
        </ButtonTodoItem>
      </ButtonContainer>
    </ListItemContainer>
  )
}

export default ListItemTodo