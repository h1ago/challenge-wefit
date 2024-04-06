import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-400: #009EDD;
    --blue-800: #3F3D56;
    --gray-100: #D9D9D9;  
    --gray-200: #C0C0C0;  
    --gray-300: #CCCCCC;
    --gray-400: #999999;
    --gray-700: #2F2E41;
    --green-400: #039B00;
    --text: #2F2E41;
    --white: #FFF;
    --box-shadow: 0px 1px 1px #AAAAAA;
  }

  .root {
    display: flex;
    justify-content: center;
  }

  * {
  box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-family: "Open Sans";
    font-style: normal;
    box-sizing: border-box;
    margin: 0;
    line-height: 1;
    background-color: var(--gray-700);
    color: var(--text);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, p {
    margin: 0;
  }

  ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 67.5rem;
  padding: 0 1rem;
`;
