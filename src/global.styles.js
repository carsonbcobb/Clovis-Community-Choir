import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans Condensed", sans-serif;
  color: #373737;

  
  @media screen and (max-width: 800px){
      padding: 10px;
  }
}
a {
  text-decoration: none;
  color: #373737;
}
* {
  box-sizing: border-box;
}
`;
