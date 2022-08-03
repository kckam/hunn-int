import { useEffect, useState, useMemo } from "react";
import { StyledHome } from "./style";
import { useTranslation, Trans } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import { scrollTo } from "../../utils";
import DOMPurify from "dompurify";
import { useConfig, useBanners } from "@ysq-intl/react-redux-ysqstore";
import breakpoints from "../../config/breakpoint";
import useWindowSize from "../../hooks/useWindowSize";

const { md, lg } = breakpoints;

function Home() {
  const { t } = useTranslation();
  const [dragging, setDragging] = useState(false);
  const { hash } = useLocation();
  const { config } = useConfig();
  const { banners } = useBanners();
  const { width: windowWidth } = useWindowSize();

  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: true,
    touchThreshold: 500,
    beforeChange: () => {
      setDragging(true);
    },
    onEdge: () => {
      setDragging(true);
    },
    afterChange: () => {
      setDragging(false);
    },
  };

  const enhancementSettings = {
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: lg.min,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: md.min,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        scrollTo(hash); //override scrolltop for every page
      }, 0);
    }
  }, [hash]);

  let homeCarousellBanners = useMemo(
    () => determineBreakpoint("home-carousell"),
    [banners, windowWidth]
  );

  let homePromotionBanners = useMemo(
    () => determineBreakpoint("home-promotion"),
    [banners, windowWidth]
  );

  function determineBreakpoint(type = "") {
    //data must be sorted acs
    /**
     banners?.find((el) => el.type === type)?.details[config.default_language]?.sort((a,b)=>a.width - b.width)
    **/

    if (banners) {
      let data = banners
        ?.find((el) => el.type === type)
        ?.details[config.default_language]?.filter((el) => !!el.images.length);

      if (data) {
        let breakpoint = data.find((el) => el.width > windowWidth);

        return breakpoint ? breakpoint : data[data.length - 1];
      }
    }
    return [];
  }

  return (
    <StyledHome>
      <Slider {...settings} className="home-banner">
        {homeCarousellBanners?.images?.map((el, index) => (
          <div
            className="banner-wrapper"
            key={`banner-${index}`}
            onClickCapture={(e) => {
              if (dragging) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
          >
            <Link to={el.link}>
              <img
                src={el._file?.src}
                alt={el._file?.alt}
                className={`${el.focus_position || ""}`}
                style={{
                  height: `${
                    homeCarousellBanners?.height
                      ? `${homeCarousellBanners?.height}px`
                      : "auto"
                  }`,
                }}
              />
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  lineHeight: 1,
                  color: "#fff",
                  pointerEvents: "none",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(el.custom_text),
                }}
              ></div>
            </Link>
          </div>
        ))}
      </Slider>

      <div id="enhancement" className="enhancement-section">
        <div className="enhancement-section__inner-wrapper container">
          <h2 className="enhancement-section__title">
            {t("page.home.section.enhancement.title")}
          </h2>

          <Slider {...enhancementSettings} className="enhancement__list">
            {t("page.home.section.enhancement.items", {
              returnObjects: true,
            }).map((el, i) => (
              <div key={`enhancement-item-${i}`} className="enhancement__item">
                <img src={el.icon} alt={el.label} />
                <h3>{el.label}</h3>
                <p>{el.desc}</p>
              </div>
            ))}
          </Slider>

          <p className="enhancement-section__description">
            {t("page.home.section.enhancement.desc")}
          </p>
        </div>
      </div>

      <Slider className="promotion-banner" {...settings}>
        {homePromotionBanners?.images?.map((el, index) => (
          <div
            className="banner-wrapper"
            key={`promotion-banner-${index}`}
            onClickCapture={(e) => {
              if (dragging) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
          >
            <Link to={el.link}>
              <img
                src={el._file?.src}
                alt={el._file?.alt}
                className={`${el.focus_position || ""}`}
                style={{
                  height: `${
                    homePromotionBanners?.height
                      ? `${homePromotionBanners?.height}px`
                      : "auto"
                  }`,
                }}
              />
            </Link>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                lineHeight: 1,
                color: "#fff",
                pointerEvents: "none",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(el.custom_text),
              }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="specs-section">
        <div className="specs-container">
          <ul className="specs-list">
            {t("page.home.section.specs.items", {
              returnObjects: true,
            }).map((el, i) => (
              <li key={`spec-item-${i}`}>
                <img src={el.icon} alt={el.label} />
                <h3>{el.label}</h3>
              </li>
            ))}
          </ul>

          <p className="specs-section__description">
            {t("page.home.section.specs.desc")}
          </p>
        </div>
      </div>

      <div className="deal-section">
        <div className="container">
          <div className="product-section">
            <img
              src="/images/home/product.png"
              width="500"
              height="500"
              alt="product"
              loading="lazy"
            />
          </div>
          <div className="description-section">
            <div className="deal__badge">
              {t("page.home.section.deal.badge")}
            </div>
            <h3>{t("page.home.section.deal.title")}</h3>
            <p>
              <Trans i18nKey="page.home.section.deal.desc">
                <span className="important">RM 59.90</span>
              </Trans>
            </p>

            <Link to="/shop" className="buy-btn">
              {t("button.buy-now")}
            </Link>
          </div>
        </div>
      </div>

      <div className="lets-get-started-section">
        <div className="container">
          <h3>{t("page.home.section.get-started.title")}</h3>
          <div className="lets-get-started__text">
            {t("page.home.section.get-started.items", {
              returnObjects: true,
            }).map((el, i) => (
              <span key={`get-started-text-${i}`}>{el}</span>
            ))}
          </div>

          <Link to="/lets-get-started" className="lets-get-started__learn-more">
            {t("button.learn-more")}{" "}
            <img src="/images/icons/arrow.svg" width="14" height="14" />
          </Link>
        </div>
      </div>

      <div id="contact-us" className="contact-us-section">
        <div className="container">
          <h2 className="contact-us-section__title">
            {t("page.home.section.contact-us.title")}
          </h2>

          <p className="contact-us-section__description">
            {t("page.home.section.contact-us.desc")}
          </p>

          <ul className="contact-list">
            {t("page.home.section.contact-us.items", {
              returnObjects: true,
            }).map((el, i) => (
              <li key={`contact-us-item-${i}`}>
                <a
                  href={(() => {
                    switch (el.action.type) {
                      case "call":
                        return `tel: ${el.action.param}`;
                      case "email":
                        return `mailto: ${el.action.param}`;
                      default:
                        break;
                    }
                  })()}
                >
                  <img src={el.icon} height="27" alt={el.label} />
                  <h3>{el.label}</h3>
                </a>

                <div className="contact-us__desc">
                  {el.desc.map((text, j) => (
                    <div key={`contact-us-text-${i}-${j}`}>{text}</div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
