import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Routes from "./Routes";
import "./i18n";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastContainer, cssTransition } from "react-toastify";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

//2

// const darkTheme = {
//   body: "#1F2122",
//   text: "#fff",
// };

/**
 * Memo, inputhandler, seo
 *
 */

const StyledApp = styled.div``;

const lightTheme = {
  body: "#fff",
  text: "#1F2122",
};

const fade = cssTransition({
  enter: "animate__animated animate__fadeIn",
  exit: "animate__animated animate__fadeOut",
});

function App() {
  const { ready } = useTranslation();

  return (
    <ErrorBoundary>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          transition={fade}
          closeOnClick={true}
          closeButton={false}
          autoClose={1000}
        />
        <StyledApp>{ready && <Routes />}</StyledApp>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
