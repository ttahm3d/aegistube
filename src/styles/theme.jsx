import { createGlobalStyle } from "styled-components";

import { blueDark, grayDark, orangeDark } from "@radix-ui/colors";

const darkTheme = {
  colors: {
    ...blueDark,
    ...grayDark,
    ...orangeDark,
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }

  body {
    margin:0;
    background-color: ${(props) => props.theme.colors.gray1};
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: ${(props) => props.theme.colors.gray12};
  }

  .p-y-2 {
    padding: 2rem 0;
  }

  .m-y-1 {
    margin: 1rem 0;
  }

`;

export { GlobalStyle, darkTheme };
