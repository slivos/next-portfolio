import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  font-family: 'Cairo', 'Segoe UI', Arial, Geneva, Verdana, sans-serif;
  
}

* {
  scrollbar-width: thin;
  scrollbar-color: #949494 #131D4D;
}

/* Targtes on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #131D4D;
}

*::-webkit-scrollbar-thumb {
  background-color: #949494;
  border-radius: 20px;
  border: 3px solid #131D4D;
}


* {
  box-sizing: border-box;
}
`;
