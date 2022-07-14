import React, {
  Suspense,
  useState,
  createContext,
  useReducer,
  useEffect,
} from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import { LANGS } from "./i18n";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import AgeVerification from "./pages/AgeVerification";
import { useTransition, animated } from "react-spring";
import reducer from "./reducers";
import ResizeObserver from "resize-observer-polyfill";

const Faq = React.lazy(() => import("./pages/Faq"));
const TermsOfUse = React.lazy(() => import("./pages/TermsOfUse"));
const WarrantyPolicy = React.lazy(() => import("./pages/WarrantyPolicy"));
const Tracking = React.lazy(() => import("./pages/Tracking"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
const Account = React.lazy(() => import("./pages/Account"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Product = React.lazy(() => import("./pages/Product"));
const WarrantyRegistration = React.lazy(() =>
  import("./pages/WarrantyRegistration")
);
const LetsGetStarted = React.lazy(() => import("./pages/LetsGetStarted"));
const WhyHunn = React.lazy(() => import("./pages/WhyHunn"));

const ResultPage = React.lazy(() => import("./components/ResultPage"));

export const AppContext = createContext();
const initialAppState = {
  showMiniCart: false,
  addedProduct: null,
};

const StyledContainer = styled.div`
  position: relative;
  min-height: 500px;
  /* overflow: auto; */
`;

function Web() {
  const auth = false;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function renderCommonRoutes() {
    return (
      <>
        {/* 
        <Route path="*" element={<Navigate to="login" />} /> */}
        <Route path={`/`} element={<Home />} />
        <Route path={`/shop`} element={<Shop />} />
        <Route path={`/cart`} element={<Cart />} />
        <Route path={`/faq`} element={<Faq />} />
        <Route path={`/terms-of-use`} element={<TermsOfUse />} />
        <Route path={`/tracking`} element={<Tracking />} />
        <Route path={`/warranty-policy`} element={<WarrantyPolicy />} />
        <Route
          path={`/thank-you`}
          element={<ResultPage status="payment-success" />}
        />
        <Route
          path={`/payment-failed`}
          element={<ResultPage status="payment-failed" />}
        />
        <Route
          path={`/warranty-success`}
          element={<ResultPage status="warranty-success" />}
        />
        <Route path={`/warranty-policy`} element={<WarrantyPolicy />} />
        <Route path={`/checkout`} element={<Checkout />} />
        <Route
          path={`/warranty-registration`}
          element={<WarrantyRegistration />}
        />
        <Route path={`/lets-get-started`} element={<LetsGetStarted />} />
        <Route path={`/product/:productId`} element={<Product />} />
        <Route path={`/why-hunn`} element={<WhyHunn />} />

        <Route path="/account">
          <Route index element={<Account />} />
          <Route path="*" element={<Account />} />
        </Route>
      </>
    );
  }

  return (
    <Routes>
      {auth ? (
        <></>
      ) : (
        <>
          <Route path={`/login`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />
          <Route path={`/forget-password`} element={<ForgetPassword />} />
        </>
      )}
      {renderCommonRoutes()}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WebRoutes() {
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [appState, appDispatch] = useReducer(reducer, initialAppState);

  return showAgeVerification ? (
    <AgeVerification
      setShowAgeVerification={setShowAgeVerification}
      showAgeVerification={showAgeVerification}
    />
  ) : (
    <article>
      <BrowserRouter
        basename={`${
          Object.keys(LANGS).includes(window.location.pathname.split("/")[1])
            ? window.location.pathname.split("/")[1]
            : ""
        }`}
      >
        <AppContext.Provider value={{ appState, appDispatch }}>
          <Header />
          <StyledContainer>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path={`/*`} element={<Web />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </StyledContainer>

          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    </article>
  );
}

export default WebRoutes;
