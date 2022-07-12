import { StyledShop } from "./style";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  return (
    <StyledShop>
      <Hero
        title={"BEGIN YOUR JOURNEY"}
        subtitle={"Let’s get shopping with Hunn."}
      />
      <ul className={`shop-items container ${true ? "" : "limit"}`}>
        <li className="shop-item">
          <Link to="/product/1">
            <img
              src="https://dummyimage.com/600x600/000/fff"
              width="360"
              height="360"
              className="shop-item__image"
              alt=""
            />
            <div className="shop-item__desc">
              <h3 className="shop-item__name">HUNN MODEL M</h3>
              <div className="shop-item__color">SPACE GREY</div>
              <div className="shop-item__price">RM86.00</div>
            </div>
          </Link>
        </li>

        <li className="shop-item">
          <img
            src="https://dummyimage.com/600x600/000/fff"
            width="360"
            height="360"
            className="shop-item__image"
            alt=""
          />
          <div className="shop-item__desc">
            <h3 className="shop-item__name">HUNN MODEL M</h3>
            <div className="shop-item__color">SPACE GREY</div>
            <div className="shop-item__price">
              {" "}
              <span className="shop-item__ori_price">RM 108.00</span>
              <span className="shop-item__sale_price">RM 88.90</span>
            </div>
          </div>
        </li>

        <li className="shop-item">
          <img
            src="https://dummyimage.com/600x600/000/fff"
            width="360"
            height="360"
            className="shop-item__image"
            alt=""
          />
          <div className="shop-item__desc">
            <h3 className="shop-item__name">HUNN MODEL M</h3>
            <div className="shop-item__color">SPACE GREY</div>
            <div className="shop-item__price shop-item__sale">
              <span className="shop-item__ori_price">RM 108.00</span>
              <span className="shop-item__sale_price">RM 59.90</span>
            </div>
          </div>
        </li>

        <li className="shop-item">
          <img
            src="https://dummyimage.com/600x600/000/fff"
            width="360"
            height="360"
            className="shop-item__image"
            alt=""
          />
          <div className="shop-item__desc">
            <h3 className="shop-item__name">HUNN MODEL M</h3>
            <div className="shop-item__color">SPACE GREY</div>
            <div className="shop-item__price">RM86.00</div>
          </div>
        </li>

        <li className="shop-item">
          <img
            src="https://dummyimage.com/600x600/000/fff"
            width="360"
            height="360"
            className="shop-item__image"
            alt=""
          />
          <div className="shop-item__desc">
            <h3 className="shop-item__name">HUNN MODEL M</h3>
            <div className="shop-item__color">SPACE GREY</div>
            <div className="shop-item__price">RM86.00</div>
          </div>
        </li>
      </ul>
    </StyledShop>
  );
}

export default Home;
