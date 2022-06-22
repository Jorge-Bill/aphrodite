import { ThemeProvider } from "styled-components";
import themeAphrodite from "assets/styles/themes/themeAphrodite";
import GlobalStyle from "assets/styles/globalStyles";
import PageRoutes from "routes/routes";

function App() {
  return (
    <ThemeProvider theme={themeAphrodite}>
      <GlobalStyle />
      <PageRoutes />
    </ThemeProvider>
  );
}

export default App;
