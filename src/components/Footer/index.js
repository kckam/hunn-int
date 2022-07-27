import React from "react";
import { Styled } from "./style";
import { LANGS } from "../../i18n";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import Warning from "../Warning";

export default function Index() {
  const { t } = useTranslation();
  const pp = useLocation();

  const NAVS = [
    {
      label: t("navs.hunn"),
      link: "",
      child: [
        {
          label: t("navs.why-hunn"),
          link: "/why-hunn",
        },
        {
          label: "Let's Get Started",
          link: "/lets-get-started",
        },
        {
          label: "Store Locator",
          link: "/store-locator",
        },
      ],
    },
    {
      label: t("navs.faqs"),
      link: "",
      child: [
        { label: t("navs.general-enquiries"), link: "/faq#general-enquiries" },
        {
          label: t("navs.about-our-hunn-devices"),
          link: "/faq#about-our-hunn-devices",
        },
        { label: t("navs.product-care"), link: "/faq#product-care" },
        { label: t("navs.payment"), link: "/faq#payment" },
        {
          label: t("navs.shipping-and-delivery"),
          link: "/faq#shipping-and-delivery",
        },
        {
          label: t("navs.returns-and-refunds-policy"),
          link: "/faq#returns-and-refunds-policy",
        },
        { label: t("navs.warranty"), link: "/faq#warranty" },
        { label: t("navs.my-account"), link: "/faq#my-account" },
      ],
    },
    {
      label: t("navs.terms-of-use-and-policy"),
      link: "",
      child: [
        { label: t("navs.privacy-notice-and-cookie"), link: "/privacy-notice" },
        { label: t("navs.warranty-policy"), link: "/warranty-policy" },
        { label: t("navs.terms-of-use"), link: "/terms-of-use" },
      ],
    },
  ];
  return (
    <>
      <Styled>
        <div className="container footer-container">
          <div className="footer-elem-wrapper">
            <div className="footer-elem">
              <img
                src="/images/logo.svg"
                width="147"
                height="60"
                alt="hunn logo"
                className="footer-elem__logo"
              />
            </div>

            {NAVS.map((nav, i) => (
              <div key={`footer-${i}`} className="footer-elem">
                <h2 className="footer-elem__title">{nav.label}</h2>
                <ul
                  className={`footer-elem__nav ${
                    nav.child.length > 4 ? "multi-col" : ""
                  }`}
                >
                  {nav.child.map((child, j) => (
                    <li key={`footer-nav-${i}-${j}`}>
                      <Link to={child.link}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Paris Tobacco International All Rights
            Reserved
          </p>
        </div>
      </Styled>
      <Warning />
    </>
  );
}
