import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
  }
  
  body {
    font-family: 'TheJamsil5Bold';
    padding-top: 1em;
    white-space: pre-wrap;
  }
  
  ul, ol{
    list-style: none;
    padding-left: 0px;  
  }
  
`;

export default GlobalStyle;
