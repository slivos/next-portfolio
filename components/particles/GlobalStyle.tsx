import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  font-family: 'Cairo', 'Segoe UI', Arial, Geneva, Verdana, sans-serif
}

* {
  box-sizing: border-box;
  /* outline: 3px solid black; */
}
`
