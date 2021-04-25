import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #717578;
    font-family: 'spoqa', sans-serif;
    font-weight: 400;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
