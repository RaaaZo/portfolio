import React from "react";

import { ThemeProvider } from "styled-components";
import { MainTheme } from "theme/MainTheme";
import GlobalStyles from "theme/GlobalStyles";
import Menu from "components/organisms/Menu";
import Footer from "components/molecules/Footer";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles />
      <Menu />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default MainTemplate;
