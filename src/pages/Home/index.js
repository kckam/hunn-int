import { StyledHome } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const { t } = useTranslation();
  const settings = {
    arrows: false,
  };

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
    </StyledHome>
  );
}

export default Home;
