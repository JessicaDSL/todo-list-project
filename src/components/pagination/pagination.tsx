import { useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import { Container, List } from './styles'

function Pagination() {

  const { currentPage, setPageValue } = useContext(TodoContext)

  const page = 10;

  function handleValuePage(e: any) {
    setPageValue(e.target.value)
  }

  function handleLastPage(e: any) {
    setPageValue(e.target.value);
  }

  function handlePrevPage(e: any) {
    setPageValue(e.target.value);
  }

  return (
    <Container>
      <button value={currentPage - 1} onClick={(e) => handlePrevPage(e)}>Anterior</button>
      <List>
        {Array.from(Array(page), (_, index) => {
          return <li key={index}><button value={index} onClick={(e) => handleValuePage(e)}>{index + 1}</button></li>
        })}
      </List>
      <button value={page - 1} onClick={(e) => handleLastPage(e)}>Ultimo</button>
    </Container>
  )
}

export default Pagination
