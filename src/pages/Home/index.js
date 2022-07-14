import { useEffect } from "react";
import { StyledHome } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import { scrollTo } from "../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const settings = {
    arrows: false,
  };

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        scrollTo(hash); //override scrolltop for every page
      }, 0);
    }
  }, [hash]);

  return (
    <StyledHome>
      <div className="containerl">
        <Slider {...settings}>
          <div>
            <img src="/images/home/banner1.png" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <div id="contact-us">
        this is contact us
        <div style={{ paddingBottom: "800px" }}></div>
      </div>
      <div style={{ paddingBottom: "800px" }}></div>
    </StyledHome>
  );
}

export default Home;
