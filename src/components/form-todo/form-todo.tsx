/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useContext } from "react";
import { ButtonAddTodo, Container, InputTodo } from './styles';
import { TodoContext } from "../../context/todo-context";

function FormTodo() {
  const {addTodo} = useContext(TodoContext)
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
