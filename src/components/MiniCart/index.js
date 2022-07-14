import { useContext, useRef } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Dropdown, Button } from "../styles";
import { AppContext } from "../../Routes";
import { useTransition, animated } from "react-spring";
import _debounce from "lodash/debounce";

function Index() {
  const { t } = useTranslation();
  const { appState, appDispatch } = useContext(AppContext);
  const debouncedTimeout = useRef(
    _debounce(() => {
      appDispatch({ type: "HIDE_MINI_CART" });
    }, 2000)
  );

  const transition = useTransition(appState.showMiniCart, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },

    onRest: () => {
      debouncedTimeout.current();
    },
  });

  return (
    <Styled key="cart" onClick={() => appDispatch({ type: "SHOW_MINI_CART" })}>
      {transition(
        (styles, show) =>
          show && (
            <animated.div style={styles}>
              <Dropdown className="mini-cart__dropdown-wrapper">
                <div className="mini-cart__dropdown">
                  <div className="left">
                    <img
                      src={
                        appState.addedProduct?.img ||
                        "https://dummyimage.com/100x100/000/fff"
                      }
                      width="64"
                      height="64"
                      className="product__image"
                    />
                  </div>
                  <div className="right">
                    <div className="product__name">
                      {appState.addedProduct?.name}
                    </div>
                    <div className="product__qty">
                      x {appState.addedProduct?.qty}
                    </div>
                  </div>
                </div>

                <Link className="cart-btn" to="/cart">
                  VIEW CART
                </Link>
              </Dropdown>
            </animated.div>
          )
      )}
    </Styled>
  );
}

export default Index;
