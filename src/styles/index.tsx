import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import BodyBackground from '../assets/background.png';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: url(${BodyBackground}) bottom center no-repeat #151635;
    background-size: cover;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
