import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Button, RowItem } from "../../components/styles";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Styled className="container">
      <div className="cart-items">
        <h2 className="cart__title">MY CART</h2>
        <ul className="cart-items__list">
          <RowItem className="cart-item__header cart-item__row item__header">
            <div className="item__image">Items</div>

            <div className="item__details">
              <div className="item__name"></div>
              <div className="item__qty">Quantity</div>
              <div className="item__price">Price</div>
            </div>
          </RowItem>

          <RowItem className="order_item">
            <div className="item__image">
              <img
                src="https://dummyimage.com/600x600/000/fff"
                width="114"
                height="114"
                className="item__image"
                alt=""
              />
            </div>

            <div className="item__details">
              <div className="item__name">MODEL M OASIS BLUE</div>
              <div className="item__qty">
                <button>-</button>
                <input value={1} />
                <button>+</button>
              </div>
              <div className="item__price">RM 1180.00</div>
            </div>
          </RowItem>

          <RowItem className="order_item">
            <div className="item__image">
              <img
                src="https://dummyimage.com/600x600/000/fff"
                width="114"
                height="114"
                className="item__image"
                alt=""
              />
            </div>

            <div className="item__details">
              <div className="item__name">
                ODEL M OASIS ODEL M OASIS MODEL M OASIS BLUE
              </div>
              <div className="item__qty">
                <button>-</button>
                <input value={1} />
                <button>+</button>
              </div>
              <div className="item__price">RM 80.00</div>
            </div>
          </RowItem>

          <RowItem className="order_item">
            <div className="item__image">
              <img
                src="https://dummyimage.com/600x600/000/fff"
                width="114"
                height="114"
                className="item__image"
                alt=""
              />
            </div>

            <div className="item__details">
              <div className="item__name">MBLUE</div>
              <div className="item__qty">
                <button>-</button>
                <input value={1} />
                <button>+</button>
              </div>
              <div className="item__price">RM 80.00</div>
            </div>
          </RowItem>
        </ul>
      </div>
      <div className="cart-summary">
        <h2 className="cart__title">ORDER SUMMARY</h2>
        <ul className="summary-table">
          <li className="summary-table__row">
            <div>Subtotal (2 items)</div>
            <div>RM160.00</div>
          </li>
          <li className="summary-table__row">
            <div>Shipping</div>
            <div>RM0.00</div>
          </li>
          <li className="summary-table__row">
            <div>Tax (included)</div>
            <div>RM0.00</div>
          </li>

          <li className="summary-table__row summary-table__total">
            <div>Total</div>
            <div>RM160.00</div>
          </li>
        </ul>

        <div className="cart-consent consent-group">
          <label>
            <input type="checkbox" />
            <div className="consent__marker">
              <img
                src="/images/icons/tick.svg"
                alt="tick"
                width="8"
                height="8"
                className="consent__marker-tick"
              />
            </div>
            <p>
              By continuing to check out, you are agreeing to our{" "}
              <Link to="/">Terms of Use</Link> and{" "}
              <Link to="/">Privacy Notice</Link>.
            </p>
          </label>
        </div>

        <div className="cart__checkout-btn">
          <Button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            CHECKOUT
          </Button>
        </div>
      </div>
    </Styled>
  );
}

export default Home;
