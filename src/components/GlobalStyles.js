import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 0.5rem;
    }
    &::-webkit-scrollbar-track{
      background-color: #fff;
    }
  }
  body {
    font-family: "Montserrat", sans-serif;
    width: 100%;
  }
  h2 {
    font-family: "Abril Fatface", cursive;
    font-size: 3rem;
    font-weight: lighter;
    color: #444;
  }
  h3 {
    padding: 1.5rem 0;
    font-size: 1.3rem;
    color: #444;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #777;
  }
  a {
    text-decoration: none;
    color: #444;
  }
  img {
    display: block;
  }
  input {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;