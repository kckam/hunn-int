import { useState } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/styles";
import Address from "../../components/Address";

function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [params, setParams] = useState({
    shippingAddress: null,
    billingAddress: null,
    shippingMethod: null,
    paymentMethod: null,
    paymentMethod: null,
    deliveryIntervals: null,

    sameAsBilling: true,

    preShippingAddress: null,
    preBillingAddress: null,
    preShippingMethod: null,
    prePaymentMethod: null,
    preDeliveryIntervals: null,
  });

  return (
    <Styled className="container">
      <div className="checkout__steps-wrapper">
        <h2 className="checkout__title">CHECKOUT</h2>
        <ul className="checkout__steps">
          <li>
            <span className="step__title">Account:</span>
            <span className="step__value"> alexa@gmail.com</span>
          </li>

          <li id="address">
            <div className="content-wrapper">
              <span className="step__title">Shipping Address</span>

              <div className="step__content">
                <Address
                  fullWidth={true}
                  selectedId={params.shippingAddress}
                  cb={(value) => {
                    setParams((prev) => ({ ...prev, shippingAddress: value }));
                  }}
                />

                <div className="billing-address">
                  <div className="step__title">Billing address</div>
                  <div className="step__content">
                    <div className=" consent-group">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked={params.sameAsBilling}
                          onChange={(e) => {
                            setParams((prev) => ({
                              ...prev,
                              sameAsBilling: e.target.checked,
                            }));
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
                        <p>Bill to the same address</p>
                      </label>
                    </div>
                  </div>
                </div>

                {!params.sameAsBilling && (
                  <div className="step__content">
                    <Address
                      fullWidth={true}
                      selectedId={params.billingAddress}
                      cb={(value) => {
                        setParams((prev) => ({
                          ...prev,
                          billingAddress: value,
                        }));
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </li>

          <li id="shipping-method">
            <div className="content-wrapper">
              <span className="step__title">Shipping Method</span>

              <div className="step__content">
                <ul class="shipping-methods">
                  <li class="">
                    <b>Standard Delivery</b>
                    <br />
                    <b>RM&nbsp;8.00</b>
                    <br /> <br />7 Buniness Day
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li id="payment-method">
            <div className="content-wrapper">
              <span className="step__title">Payment Method</span>

              <div className="step__content">
                <ul class="payment-methods">
                  <li class="">
                    <div class="text">
                      <img
                        src="https://dummyimage.com/600x400/000/fff"
                        height="20"
                        width="80"
                        alt="Midtrans"
                      />
                      <br />
                      <br />
                      <div class="sub">Midtrans</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="checkout-summary">
        <h2 className="checkout__title">ORDER SUMMARY</h2>
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

          <li className="summary-table__row checkout__promo">
            <div>Discount Code/Promo Code</div>
            <div className="promo__input-group-wrapper">
              <div className="promo__input-group">
                <input placeholder="Code" />
                <button>Apply</button>
              </div>

              <div className="promo__discount-price">-RM10.00</div>
            </div>
          </li>

          <li className="summary-table__row summary-table__total">
            <div>Total</div>
            <div>RM160.00</div>
          </li>
        </ul>

        <div className="checkout__confitm-btn">
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

export default Index;
