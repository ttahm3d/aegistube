import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "./components";
import Router from "./router/Router";
import { GlobalStyle, darkTheme } from "./styles/theme";
import { Page } from "./styles/utils";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Page>
          <Header />
          <Router />
          <Footer />
        </Page>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
