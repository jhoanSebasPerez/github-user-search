import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #0079ff;

  /* Light mode colors */
  --gray-light: #697c9a;
  --blue-light: #4b6a9b;
  --black-light: #2b3442;
  --lightgray-light: #f6f8ff;
  --white-light: #fefefe;

  /* Dark mode color*/
  --white-dark: #ffffff;
  --black-dark: #141d2f;
  --purple-dark: #1e2a47;
}

body {
  margin: 0;
  font-family: "Space Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  ${(props) =>
    props.darkMode
      ? css`
          background-color: var(--black-dark);
        `
      : css`
          background-color: var(--lightgray-light);
        `};
}   
`;

export default GlobalStyles;
