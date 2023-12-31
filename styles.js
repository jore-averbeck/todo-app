import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-primary: #292929;
  --color-secondary: #603FE3;
  --color-third: #EC5555;
  --color-fourth: #FFCD4D;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  
      font-family: 'Heebo', sans-serif;;
  
`;
