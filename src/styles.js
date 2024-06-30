// src/styles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: black;
    color: white;
    font-family: 'Arial', sans-serif;
  }

  a {
    color: red;
    text-decoration: none;
  }
`;
