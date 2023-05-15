import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck } from "react-icons/ai";
import { Todo } from '../../types/todo';
import { ListItemContainer, ButtonTodoItem, ButtonContainer } from './styles';

interface TodoItemProps {
  todo: Todo;
  updateTodo: (todo: Todo) => void,
  deleteTodo: (todo: Todo) => void,
}


function ListItemTodo({ todo, updateTodo, deleteTodo }: TodoItemProps) {

  function handleToggleCompleted(todo: Todo) {
    const newTodo = { ...todo, completed: !todo.completed }
   updateTodo(newTodo)
  }

  function handleDeleteTodo(todo: Todo) {
   deleteTodo(todo)
  }

  return (
    <ListItemContainer key={todo.id}>
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