import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans Condensed", sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: 40em) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;
