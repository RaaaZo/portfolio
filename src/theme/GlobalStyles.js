import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}

    html {
    font-size: 62.5%;
}



    body {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    overflow-x: hidden;
    
}
`;

export default GlobalStyles;
