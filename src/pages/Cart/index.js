import { useState, useEffect, useRef } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Button, RowItem } from "../../components/styles";
import usePriceFormat from "../../hooks/usePriceFormat";
import { useCarts, useConfig } from "@ysq-intl/react-redux-ysqstore";
import _debounce from "lodash/debounce";
import { toast } from "react-toastify";
import { useTransition, useSpring, animated } from "react-spring";

function Home() {
  const { t } = useTranslation();
  const { carts, getCart, addToCart } = useCarts();
  const { config } = useConfig();
  const priceFormat = usePriceFormat();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [consent, setConsent] = useState(false);
  const debouncedAddtoCart = useRef(_debounce(addToCart.action, 500));

  const transitions = useTransition(
    items.filter((el) => el.qty > 0),
    {
      keys: (item) => `item-anim-${item.cid}`,
      from: { opacity: 0, y: -10 },
      enter: { opacity: 1, y: 0 },
      leave: { opacity: 0, y: -10 },
      delay: 300,
    }
  );

  useEffect(() => {
    if (addToCart.status.success) {
      toast("Cart Updated.");
    }
  }, [addToCart.status]);

  useEffect(() => {
    getCart.action();
  }, []);

  useEffect(() => {
    if (getCart.status.success) {
      setItems(carts.items);
    }
  }, [getCart.status.success]);

  useEffect(() => {
    items.map((item, i) => {
      if (item.update) {
        debouncedAddtoCart.current({
          cid: item.cid,
          id: item.id,
          qty: item.qty,
        });

        setItems((prevItems) =>
          prevItems.map((prevItem) => ({ ...prevItem, update: false }))
        );
      }
    });
  }, [items]);

  return (
    (getCart.status.success || getCart.status.failure) && (
      <Styled className="container">
        <div className="cart-items">
          <h2 className="cart__title">MY CART</h2>
          {!carts ? (
            <div className="no-result" style={{ marginTop: "4rem" }}>
              <h2 className="no-result-header">Nothing here yet</h2>
              <p>Would you like to return to browsing?</p>

              <div style={{ margin: "30px 0" }}>
                <Button
                  width={"220px"}
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  View Products
                </Button>
              </div>
            </div>
          ) : (
            <ul className="cart-items__list">
              <RowItem className="cart-item__header cart-item__row item__header">
                <div className="item__image">Items</div>

                <div className="item__details">
                  <div className="item__name"></div>
                  <div className="item__qty">Quantity</div>
                  <div className="item__price">Price</div>
                </div>
              </RowItem>

              {transitions((styles, item, _, index) => {
                return (
                  <RowItem
                    style={styles}
                    className="order_item"
                    key={`item-${item.cid}`}
                  >
                    <div className="item__image">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={
                            item.details[config.default_language]
                              ?.galleries?.[0]?._file.src ||
                            "https://cdn.ysqhub.com/staging/hunn/no-image.svg"
                          }
                          alt={
                            item.details[config.default_language]
                              ?.galleries?.[0]?._file.alt
                          }
                          width="114"
                          height="114"
                          className="item__image"
                        />
                      </Link>
                    </div>

                    <div className="item__details">
                      <div className="item__name">
                        <Link to={`/product/${item.id}`}>
                          {item.details[config.default_language]?.name}
                          {!!item.error && <> - (Sold Out)</>}
                        </Link>
                      </div>
                      <div className="item__qty">
                        <button
                          onClick={(e) => {
                            setItems((prevItems) =>
                              prevItems.map((prevItem) =>
                                prevItem.cid === item.cid
                                  ? {
                                      ...prevItem,
                                      qty:
                                        prevItem.qty - 1 > 0
                                          ? prevItem.qty - 1
                                          : 0,
                                      update: true,
                                    }
                                  : prevItem
                              )
                            );
                          }}
                        >
                          -
                        </button>
                        <input
                          value={item.qty}
                          onChange={(e) => {
                            setItems((prevItems) =>
                              prevItems.map((prevItem) =>
                                prevItem.cid === item.cid
                                  ? {
                                      ...prevItem,
                                      qty: e.target.value,
                                    }
                                  : prevItem
                              )
                            );
                          }}
                          onBlur={(e) => {
                            setItems((prevItems) =>
                              prevItems.map((prevItem) =>
                                prevItem.cid === item.cid &&
                                item.qty !== +e.target.value
                                  ? {
                                      ...prevItem,
                                      update: true,
                                    }
                                  : prevItem
                              )
                            );
                          }}
                        />
                        <button
                          onClick={(e) => {
                            setItems((prevItems) =>
                              prevItems.map((prevItem) =>
                                prevItem.cid === item.cid
                                  ? {
                                      ...prevItem,
                                      qty: prevItem.qty + 1,
                                      update: true,
                                    }
                                  : prevItem
                              )
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="item__price">
                        {priceFormat(item.subtotal_sale_price)}
                      </div>
                    </div>
                  </RowItem>
                );
              })}

              {/* {items.map((item) => (
                <RowItem className="order_item" key={`item-${item.cid}`}>
                  <div className="item__image">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={
                          item.details[config.default_language]?.galleries?.[0]
                            ?._file.src ||
                          "https://cdn.ysqhub.com/staging/hunn/no-image.svg"
                        }
                        alt={
                          item.details[config.default_language]?.galleries?.[0]
                            ?._file.alt
                        }
                        width="114"
                        height="114"
                        className="item__image"
                      />
                    </Link>
                  </div>

                  <div className="item__details">
                    <div className="item__name">
                      <Link to={`/product/${item.id}`}>
                        {item.details[config.default_language]?.name}
                        {!!item.error && <> - (Sold Out)</>}
                      </Link>
                    </div>
                    <div className="item__qty">
                      <button
                        onClick={(e) => {
                          setItems((prevItems) =>
                            prevItems.map((prevItem) =>
                              prevItem.cid === item.cid
                                ? {
                                    ...prevItem,
                                    qty:
                                      prevItem.qty - 1 > 0
                                        ? prevItem.qty - 1
                                        : 0,
                                    update: true,
                                  }
                                : prevItem
                            )
                          );
                        }}
                      >
                        -
                      </button>
                      <input
                        value={item.qty}
                        onChange={(e) => {
                          setItems((prevItems) =>
                            prevItems.map((prevItem) =>
                              prevItem.cid === item.cid
                                ? {
                                    ...prevItem,
                                    qty: e.target.value,
                                  }
                                : prevItem
                            )
                          );
                        }}
                        onBlur={(e) => {
                          setItems((prevItems) =>
                            prevItems.map((prevItem) =>
                              prevItem.cid === item.cid &&
                              item.qty !== +e.target.value
                                ? {
                                    ...prevItem,
                                    update: true,
                                  }
                                : prevItem
                            )
                          );
                        }}
                      />
                      <button
                        onClick={(e) => {
                          setItems((prevItems) =>
                            prevItems.map((prevItem) =>
                              prevItem.cid === item.cid
                                ? {
                                    ...prevItem,
                                    qty: prevItem.qty + 1,
                                    update: true,
                                  }
                                : prevItem
                            )
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="item__price">
                      {priceFormat(item.subtotal_sale_price)}
                    </div>
                  </div>
                </RowItem>
              ))} */}
            </ul>
          )}
        </div>

        {!!carts && (
          <div className="cart-summary">
            <h2 className="cart__title">ORDER SUMMARY</h2>
            <ul className="summary-table">
              <li className="summary-table__row">
                <div>
                  Subtotal (
                  {carts.items?.reduce((acc, el) => {
                    return acc + +el.qty;
                  }, 0)}{" "}
                  items)
                </div>
                <div>{priceFormat(carts?.amounts?.total)}</div>
              </li>
              <li className="summary-table__row">
                <div>Shipping</div>
                <div>To be determined</div>
              </li>
              <li className="summary-table__row">
                <div>Tax</div>
                <div>To be determined</div>
              </li>

              <li className="summary-table__row summary-table__total">
                <div>Total</div>
                <div>{priceFormat(carts?.amounts?.total)}</div>
              </li>
            </ul>

            <div className="cart-consent consent-group">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setConsent(e.target.checked);
                  }}
                />
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
                className={`${
                  !carts || carts?.error || !consent ? "disabled" : ""
                }`}
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                CHECKOUT
              </Button>
            </div>
          </div>
        )}
      </Styled>
    )
  );
}

export default Home;
