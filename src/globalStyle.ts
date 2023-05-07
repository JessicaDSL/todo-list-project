import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --background-color: rgb(20, 22, 40); // purple
    --white-color: rgb(255, 255, 255); //white
    --contrast-color: #D8489F; //pink
    --transparent-color-background: #4C243B //transparent purple
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul li{
    list-style: none;
  }

  body {
    background-color: var(--background-color);
    color: var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: var(--white-color);
  }

  button {
    cursor: pointer;
  }

  h1 {
    text-align: center;
    margin: 2rem 0;
  }

  .container {
    background-color: var(--transparent-color-background);
    border-radius: 15px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      color: var(--contrast-color);
    }
    .formDiv {
      display: flex;
      justify-content: space-around;
      width: 92%;
      padding: 1rem 0;
    }
    .formDiv input {
      background-color: var(--white-color);
      border-radius: 8px;
      border: 1px solid var(--contrast-color);
      width: 85%;
      padding: .5rem 0 .5rem .5rem;
      font-size: 1rem;
      &::placeholder {
        color: var(--transparent-color-background);
        padding: 0 0 0 .5rem;
        font-size: 1rem;
      }
    }
    .formDiv button {
      background-color: var(--contrast-color);
      border-radius: 8px;
      border: none;
      width: 10%;
      color: var(--white-color);
      font-size: large;
    }
  }

  .container ul {
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
  } 

  ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    align-items: center;
    border-top: 1px solid rgba(99, 47, 77, 1);
  }

  ul li div {
    display: flex;
  }

  ul li button {
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
  }
`;

export default GlobalStyle;
