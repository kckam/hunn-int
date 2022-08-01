import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import AgeVerification from "./pages/AgeVerification";
import {
  useConfig,
  useAuth,
  useAge,
  useProducts,
  useBootstrap,
  useBanners,
} from "@ysq-intl/react-redux-ysqstore";
import { Helmet } from "react-helmet";
import AppProvider from "./AppProvider";
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
const StoreLocator = React.lazy(() => import("./pages/StoreLocator"));
const WarrantyRegistration = React.lazy(() =>
  import("./pages/WarrantyRegistration")
);
const LetsGetStarted = React.lazy(() => import("./pages/LetsGetStarted"));
const WhyHunn = React.lazy(() => import("./pages/WhyHunn"));
const PrivacyNotice = React.lazy(() => import("./pages/PrivacyNotice"));

const ResultPage = React.lazy(() => import("./components/ResultPage"));

const StyledContainer = styled.div`
  position: relative;
  min-height: 500px;
`;

function Web() {
  const { auth } = useAuth();
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
        <Route path={`/privacy-notice`} element={<PrivacyNotice />} />
        <Route path={`/terms-of-use`} element={<TermsOfUse />} />
        <Route path={`/tracking`} element={<Tracking />} />
        <Route path={`/warranty-policy`} element={<WarrantyPolicy />} />
        <Route
          path={`/warranty-success`}
          element={<ResultPage status="warranty-success" />}
        />
        <Route path={`/store-locator`} element={<StoreLocator />} />
        <Route
          path={`/warranty-registration`}
          element={<WarrantyRegistration />}
        />
        <Route path={`/lets-get-started`} element={<LetsGetStarted />} />
        <Route path={`/product/:productId`} element={<Product />} />
        <Route path={`/why-hunn`} element={<WhyHunn />} />
      </>
    );
  }

  return (
    <Routes>
      {auth ? (
        <>
          <Route path="/account/*" element={<Account />} />
          <Route path={`/checkout`} element={<Checkout />} />
          <Route
            path={`/thank-you`}
            element={<ResultPage status="payment-success" />}
          />
          <Route
            path={`/payment-failed`}
            element={<ResultPage status="payment-failed" />}
          />
          <Route
            path={`/login`}
            element={<Navigate to={"/account/profile"} />}
          />
          <Route
            path={`/register`}
            element={<Navigate to={"/account/profile"} />}
          />
          <Route
            path={`/forget-password`}
            element={<Navigate to={"/account/profile"} />}
          />
        </>
      ) : (
        <>
          {/* <Route path="/account/*" element={<Account />} /> */}
          <Route path={`/account/*`} element={<Navigate to={"/login"} />} />
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
  const { age: showAgeVerification } = useAge();
  const { bootstrap, init } = useBootstrap();
  const { getProducts } = useProducts();
  const { config, updateIntl } = useConfig();
  const { getBanners } = useBanners();

  useEffect(() => {
    init.action();
    getProducts.action();
    getBanners.action();
    updateIntl.action(window.location.pathname.split("/")[1]);
  }, []);

  if (bootstrap === false) {
    throw new Error("Bootstrap Failed");
  } else if (
    bootstrap === null ||
    !getProducts.status.success ||
    config === null
  ) {
    return <Loading />;
  }

  return !showAgeVerification ? (
    <AgeVerification />
  ) : (
    <article>
      <BrowserRouter
        basename={`${
          config?.languages
            ?.map((el) => el.lang)
            .includes(window.location.pathname.split("/")[1])
            ? window.location.pathname.split("/")[1]
            : ""
        }`}
      >
        <AppProvider>
          <Helmet
            htmlAttributes={{ lang: config.default_language }}
            titleTemplate="Hunn International - %s"
            defaultTitle="Hunn International"
          >
            <link rel="home" href="https://hunn-international.com" />
            <link rel="canonical" href="https://hunn-international.com" />
            {config?.languages?.map((locale) => (
              <link
                rel="alternate"
                href={`https://hunn-international.com/${locale.lang}`}
                hreflang={locale.lang}
                key={locale}
              />
            ))}
          </Helmet>
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
        </AppProvider>
      </BrowserRouter>
    </article>
  );
}

export default WebRoutes;
