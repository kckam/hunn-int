import React, { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import {
  Link,
  Route,
  Routes,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { useTransition, useSpring, animated } from "react-spring";
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import Profile from "./Profile";
import Address from "../../components/Address";
import Email from "./Email";
import Password from "./Password";
import Order from "./Order";

const NAVS = [
  { label: "PROFILE", link: "/account/profile" },
  { label: "ADDRESS", link: "/account/address" },
  { label: "EMAIL", link: "/account/email" },
  { label: "PASSWORD", link: "/account/password" },
  { label: "ORDER", link: "/account/order" },
];

function Account() {
  const { t } = useTranslation();
  const params = useParams();
  const location = useLocation();
  const [showAccountNav, setShowAccountNav] = useState(false);
  const [ref, { height: navsHeight }] = useMeasure({
    polyfill: ResizeObserver,
  });

  const transitions = useTransition(location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: "none" },
  });
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: showAccountNav ? navsHeight : 0,
      opacity: showAccountNav ? 1 : 0,
      y: showAccountNav ? 0 : 20,
    },
  });

  return (
    <Styled>
      <Hero title={"MY ACCOUNT"} />
      <div className={`inner-container ${showAccountNav ? "active" : ""}`}>
        {!showAccountNav && (
          <div
            className="account__nav-chosen-wrapper"
            onClick={() => {
              setShowAccountNav(true);
            }}
          >
            <div className="account__nav--chosen">
              {NAVS.find((el) => params["*"] === el.link.split("/")[2])?.label}
            </div>

            <div className="chevron"></div>
          </div>
        )}

        <animated.div
          className="account__navs-wrapper"
          style={{
            opacity,
            height,
          }}
        >
          <ul className="account__navs" ref={ref}>
            {NAVS.map((nav, i) => (
              <li
                key={`account-nav-${i}`}
                onClick={() => {
                  setShowAccountNav(false);
                }}
                className={`account__nav ${
                  params["*"] === nav.link.split("/")[2]
                    ? "account__nav--active"
                    : ""
                }`}
              >
                <Link to={nav.link}>{nav.label}</Link>
              </li>
            ))}
            <li className="account__nav">LOGOUT</li>
          </ul>
          <div className="chevron"></div>
        </animated.div>

        {transitions((styles, item) => (
          <animated.div className="account__content" style={styles}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/address" element={<Address />} />
              <Route path="/email" element={<Email />} />
              <Route path="/password" element={<Password />} />
              <Route path="/order" element={<Order />} />
              <Route path="*" element={<Navigate to="/account/profile" />} />
            </Routes>
          </animated.div>
        ))}
      </div>
    </Styled>
  );
}

export default Account;
