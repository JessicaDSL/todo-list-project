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
    margin: 2rem;
    h1{
      color: var(--contrast-color);
    }
  }

`;

export default GlobalStyle;
