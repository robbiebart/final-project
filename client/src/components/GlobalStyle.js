import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
h1 {
  font-family: 'Arvo', serif;
  color: grey;
  }

  h2, h3, p {
    font-family: 'Cabin', sans-serif;
    color: grey;
  }

  a {
    text-decoration: none;
  }

  label {
    font-family: 'Cabin', sans-serif;
  }
`;

export default GlobalStyle;
