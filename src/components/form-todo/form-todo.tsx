import { useRef } from "react";
import { ButtonAddTodo, Container, InputTodo } from './styles'
import { Todo } from "../../types/todo";


interface TodoInputProps {
  addTodo: (todo: Todo) => void
}

function FormTodo({addTodo}: TodoInputProps) {

  const tituloRef = useRef<HTMLInputElement>(null);
  function handleAddTodo() {
    const todo = {
      id: Math.random() * 1000,
      title: tituloRef?.current?.value || '',
      completed: false
    }
    addTodo(todo);
    clearInputTodo();
  }

  function clearInputTodo() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    tituloRef.current!.value = ''
  }

  return (
    <Container>
      <InputTodo ref={tituloRef} type='text' id="inputText" placeholder='Insira a nova tarefa' />
      <ButtonAddTodo onClick={handleAddTodo}>+</ButtonAddTodo>
    </Container>
  )
}

export default FormTodo;
