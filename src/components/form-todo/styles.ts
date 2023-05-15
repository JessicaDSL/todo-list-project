import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 92%;
  padding: 1rem 0;
`;

export const InputTodo = styled.input`
  background-color: var(--white-color);
  border-radius: 8px;
  border: 1px solid var(--contrast-color);
  width: 85%;
  padding: 0.5rem 0 0.5rem 0.5rem;
  font-size: 1rem;
  &::placeholder {
    color: var(--transparent-color-background);
    padding: 0 0 0 0.5rem;
    font-size: 1rem;
  }
`;

export const ButtonAddTodo = styled.button`
  background-color: var(--contrast-color);
  border-radius: 8px;
  border: none;
  width: 10%;
  color: var(--white-color);
  font-size: large;
`;
