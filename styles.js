import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-background:#ffffff;
  --color-primary: #fffff;
  --color-secondary:#0d0d0d;
  --color-third: #d9376e;
  --color-fourth:#ff8e3c;
  --color-button:#f45d48;
  --color-headline:#232323;
  --color-text:#222525;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  
      font-family: 'Heebo', sans-serif;;
  
`;
