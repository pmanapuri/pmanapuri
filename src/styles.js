// src/styles.js
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: black;
    color: white;
    font-family: 'Roboto', sans-serif;
  }

  h2, h3 {
    font-family: 'Roboto', sans-serif;
    color: red;
  }

  a {
    color: red;
    text-decoration: none;
  }
`;
