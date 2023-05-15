import styled from "styled-components";

export const ListItemContainer = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  border-top: 1px solid rgba(99, 47, 77, 1);
`;

export const ButtonContainer = styled.div`
  display: flex;
`

export const ButtonTodoItem = styled.button`
  display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0.7rem;
    margin: 0 0 0 0.45rem;
    border: none;
    border-radius: 4px;
    background: rgb(34, 3, 31);
    background: linear-gradient(
      0deg,
      rgba(34, 3, 31, 1) 0%,
      rgba(56, 5, 51, 1) 100%
    );
    &:hover {
      background: rgb(0, 3, 255);
      background: linear-gradient(
        0deg,
        rgba(99, 47, 77, 1) 0%,
        rgba(184, 87, 143, 1) 100%
      );
    }
`
