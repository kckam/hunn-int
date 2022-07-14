import React, { useState, useEffect } from "react";
import { Styled, StyledMobileMenu } from "./style";
import { Link, useLocation } from "react-router-dom";
import Warning from "../Warning";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "react-spring";
import { LANGS } from "../../i18n";
import i18n from "i18next";
import MiniCart from "../MiniCart";
import { Dropdown } from "../styles";

export default function Index() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [showLanguage, setShowLanguage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const languageTransition = useTransition(showLanguage, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: { duration: 150 },
  });

  const menuTransition = useTransition(showMenu, {
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(80%,0,0)" },
    config: { duration: 250 },
  });

  const NAVS = [
    {
      label: t("navs.shop"),
      link: "/shop",
    },
    {
      label: t("navs.warranty-registration"),
      link: "/warranty-registration",
    },
    {
      label: t("navs.my-account"),
      link: "/account/profile",
    },
    {
      label: t("navs.contact-us"),
      link: "/#contact-us",
    },
  ];

  useEffect(() => {
    if (showMenu) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "initial";
    }

    return () => {
      document.querySelector("body").style.overflow = "initial";
    };
  }, [showMenu]);

  return (
    <>
      <div
        className="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 99999,
        }}
      >
        <Warning />
        <Styled>
          <header className="container header">
            <Link to="/">
              <img
                src="/images/logo.svg"
                width="99"
                height="40"
                alt="hunn logo"
                className="header__logo"
              />
            </Link>

            <ul className="header-nav">
              {NAVS.map((nav, i) => (
                <li
                  key={`nav-${i}`}
                  className={`header-nav__item ${
                    pathname.startsWith(nav.link) ? "nav__item--active" : ""
                  }`}
                >
                  <Link to={nav.link}>{nav.label}</Link>
                </li>
              ))}

              <li
                className="header-nav__item has-child"
                onClick={() => {
                  setShowLanguage((prev) => !prev);
                }}
              >
                <div>{t("navs.language")}</div>
                <div
                  className={`dropdown-icon ${showLanguage ? "active" : ""}`}
                ></div>

                {languageTransition(
                  (style, show) =>
                    show && (
                      <animated.div style={style}>
                        <Dropdown>
                          <ul>
                            {Object.keys(LANGS).map((key) => (
                              <li
                                className={`dropdown__item ${
                                  i18n.language === key
                                    ? "dropdown__item--active"
                                    : ""
                                }`}
                                key={`lang-${key}`}
                                onClick={() => {
                                  window.location.href = `/${key}${
                                    pathname === "/" ? "" : pathname
                                  }`;
                                }}
                              >
                                {LANGS[key]}
                              </li>
                            ))}
                          </ul>
                        </Dropdown>
                      </animated.div>
                    )
                )}
              </li>
              {!showMenu && (
                <li className="header-nav__item header-cart">
                  <Link to="/cart">
                    <img
                      src="/images/header/icon_cart.svg"
                      width="24"
                      height="23"
                      alt="cart icon"
                    />
                  </Link>

                  <span className="header-cart__counter">2</span>

                  <MiniCart />
                </li>
              )}

              <li
                className={`header-nav__item header-hamburger ${
                  showMenu ? "header-hamburger--active" : ""
                }`}
                onClick={() => {
                  setShowMenu((status) => !status);
                }}
              >
                <div></div>
              </li>
            </ul>
          </header>
        </Styled>
      </div>
      {menuTransition((style, showMenu) => {
        return (
          showMenu && (
            <StyledMobileMenu style={style} className="mobile-menu">
              <div className="container">
                <ul className="mobile-nav">
                  {NAVS.map((nav, i) => (
                    <li
                      key={`nav-${i}`}
                      className={`mobile-nav__item ${
                        pathname.startsWith(nav.link) ? "nav__item--active" : ""
                      }`}
                    >
                      <Link
                        to={nav.link}
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      >
                        {nav.label}
                      </Link>
                    </li>
                  ))}

                  <li
                    className="mobile-nav__item has-child"
                    onClick={() => {
                      setShowLanguage((prev) => !prev);
                    }}
                  >
                    <div>{t("navs.language")}</div>
                    <div
                      className={`dropdown-icon ${
                        showLanguage ? "active" : ""
                      }`}
                    ></div>

                    {languageTransition(
                      (style, show) =>
                        show && (
                          <animated.ul className="dropdown" style={style}>
                            {Object.keys(LANGS).map((key) => (
                              <li
                                className={`dropdown__item ${
                                  i18n.language === key
                                    ? "dropdown__item--active"
                                    : ""
                                }`}
                                key={`lang-${key}`}
                                onClick={() => {
                                  window.location.href = `/${key}${
                                    pathname === "/" ? "" : pathname
                                  }`;
                                }}
                              >
                                {LANGS[key]}
                              </li>
                            ))}
                          </animated.ul>
                        )
                    )}
                  </li>
                </ul>
              </div>
            </StyledMobileMenu>
          )
        );
      })}
    </>
  );
}
