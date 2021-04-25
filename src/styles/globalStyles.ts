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
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  body,
  body *,
  input,
  textarea,
  ::selection,
  button {
  font-family: inherit;
  letter-spacing: -0.12px;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
