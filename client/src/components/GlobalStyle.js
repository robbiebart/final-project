import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
h1 {
  font-family: 'Arvo', serif;
  }

  h2, h3 {
    font-family: 'Cabin', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
