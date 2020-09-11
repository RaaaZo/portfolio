import React from 'react'


import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "theme/MainTheme";
import GlobalStyles from "theme/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    </>
  ),
];