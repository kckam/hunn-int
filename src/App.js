import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Routes from "./Routes";
import "./i18n";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "./components/ErrorBoundary";
import "./style.css";

// const darkTheme = {
//   body: "#1F2122",
//   text: "#fff",
// };

const StyledApp = styled.div``;

const lightTheme = {
  body: "#fff",
  text: "#1F2122",
};

function App() {
  const { ready } = useTranslation();

  return (
    <ErrorBoundary>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <StyledApp>{ready && <Routes />}</StyledApp>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

// <Trans i18nKey="welcome">
//             <strong>{{ title: "BBC" }}</strong>
//           </Trans>
