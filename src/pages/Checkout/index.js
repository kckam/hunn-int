import { useState, useEffect, useRef } from "react";
import { Styled, PaymentProcessing } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import usePriceFormat from "../../hooks/usePriceFormat";
import { Button } from "../../components/styles";
import Address from "../../components/Address";
import {
  useProfile,
  useCarts,
  useConfig,
  usePaymentMethods,
  useShippingMethods,
  useSpecial,
} from "@ysq-intl/react-redux-ysqstore";
import { toast } from "react-toastify";
import LoadingBtn from "../../components/LoadingBtn";
import moment from "moment";

function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { config } = useConfig();
  const { getSignature, createOrder } = useSpecial();
  const { paymentMethods, getPaymentMethods } = usePaymentMethods();
  const { shippingMethods, getShippingMethods } = useShippingMethods();
  const { carts, getCart, applyPromoCode } = useCarts();
  const [promoCode, setPromoCode] = useState("");
  const priceFormat = usePriceFormat();
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [params, setParams] = useState({
    shippingAddress: null,
    billingAddress: null,
    shippingMethod: null,
    paymentMethod: null,
    paymentMethod: null,
    deliveryIntervals: null,

    sameAsBilling: true,
  });

  const paymentRef = useRef(null);

  useEffect(() => {
    if (applyPromoCode.status.success) {
      toast("Promo Code applied.");
    }
  }, [applyPromoCode.status]);

  /* PRESELECT PAYMENT METHOD AND SHIPPING METHOD START */
  useEffect(() => {
    if (getPaymentMethods.status.success) {
      setParams((prev) => ({
        ...prev,
        paymentMethod: getPaymentMethods.result[0].id,
      }));
    } else if (getPaymentMethods.status.failure) {
      toast.error("Get payment method failed");
    }
  }, [getPaymentMethods.status]);

  useEffect(() => {
    if (getShippingMethods.status.success) {
      setParams((prev) => ({
        ...prev,
        shippingMethod: getShippingMethods.result[0].id,
      }));
    } else if (getShippingMethods.status.failure) {
      toast.error("Get shipping method failed");
    }
  }, [getShippingMethods.status]);
  /* PRESELECT PAYMENT METHOD AND SHIPPING METHOD END */

  useEffect(() => {
    getPaymentMethods.action();
    getCart.action();
  }, []);

  useEffect(() => {
    if (carts?.error) {
      navigate("/cart");
    }
  }, [carts]);

  useEffect(() => {
    if (params.shippingAddress) {
      getShippingMethods.action({
        shipping_address_id: params.shippingAddress,
      });
    }
  }, [params.shippingAddress]);

  useEffect(() => {
    getCart.action({
      shipping_address_id: params.shippingAddress,
      courier_id: params.shippingMethod,
    });
  }, [params.shippingMethod]);

  useEffect(() => {
    if (getSignature.result) {
      setLoadingScreen(true);
      createOrder.action({
        shipping_address_id: params.shippingAddress,
        billing_address_id: params.sameAsBilling
          ? params.shippingAddress
          : params.billingAddress,
        payment_gateway_id: params.paymentMethod,
        courier_id: params.shippingMethod,
        delivery_intervals_id: shippingMethods.find(
          (el) => el.id == params.shippingMethod
        )?.delivery_intervals?.length
          ? params.deliveryIntervals
          : -1,
        signature: getSignature.result,
      });
    }
  }, [getSignature.result]);

  useEffect(() => {
    if (carts) {
      setPromoCode(carts.promo_code);
    }
  }, [carts]);

  useEffect(() => {
    if (createOrder.result) {
      paymentRef.current.innerHTML = createOrder.result.html;
    }
  }, [createOrder.result]);

  useEffect(() => {
    if (paymentRef.current && createOrder.result) {
      const script = document.createElement("script");
      script.innerHTML = createOrder.result.script;

      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [paymentRef.current]);

  return (
    <Styled className="container">
      {loadingScreen && (
        <PaymentProcessing>
          Processing payment...
          <div ref={paymentRef}></div>
        </PaymentProcessing>
      )}
      <div className="checkout__steps-wrapper">
        <h2 className="checkout__title">CHECKOUT</h2>
        <ul className="checkout__steps">
          <li>
            <span className="step__title">Account:</span>
            <span className="step__value"> {profile.email}</span>
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
                      <label className="center">
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
          {
            <li id="shipping-method">
              <div className="content-wrapper">
                <span className="step__title">Shipping Method</span>

                <div className="step__content">
                  {shippingMethods ? (
                    <ul className="shipping-methods">
                      {shippingMethods?.map((shippingMethod) => {
                        return (
                          <li
                            key={`shipping-method-${shippingMethod.id}`}
                            className={`selectable ${
                              params.shippingMethod === shippingMethod.id
                                ? "active"
                                : ""
                            }`}
                            onClick={() => {
                              setParams((prevState) => {
                                return {
                                  ...prevState,
                                  shippingMethod: shippingMethod.id,
                                };
                              });
                            }}
                          >
                            <b>{shippingMethod.type.en}</b>
                            <br />
                            <b>{priceFormat(shippingMethod.fee)}</b>
                            {shippingMethod.est_delivery_day && (
                              <>
                                <br /> <br />
                                {shippingMethod.est_delivery_day} Buniness Day
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div>Please select Shipping address</div>
                  )}

                  {params.shippingMethod &&
                    shippingMethods.find((el) => el.id == params.shippingMethod)
                      ?.delivery_intervals && (
                      <div>
                        <br />
                        <br />
                        <b>
                          {shippingMethods?.find(
                            (el) => el.id == params.shippingMethod
                          )?.type_id === 1
                            ? "Collection Time"
                            : "Delivery Time"}
                        </b>

                        <br />
                        <br />

                        <ul
                          className="bordered bordered-center delivery-intervals"
                          style={{ height: "250px", overflow: "auto" }}
                        >
                          {shippingMethods
                            .find((el) => el.id == params.shippingMethod)
                            .delivery_intervals?.map((el, index) => {
                              return (
                                <li
                                  key={`shipping-method-${index}`}
                                  className={`selectable ${
                                    params.deliveryIntervals === index
                                      ? "active"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    setParams((prevState) => {
                                      return {
                                        ...prevState,
                                        deliveryIntervals: index,
                                      };
                                    });
                                  }}
                                >
                                  {moment(el.delivery_time_start)
                                    .utcOffset(config.utc)
                                    .format("Y-MM-DD H:mm")}{" "}
                                  -{" "}
                                  {moment(el.delivery_time_end)
                                    .utcOffset(config.utc)
                                    .format("H:mm")}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </li>
          }

          <li id="payment-method">
            <div className="content-wrapper">
              <span className="step__title">Payment Method</span>

              <div className="step__content">
                <ul className="payment-methods">
                  {paymentMethods?.map((el) => {
                    return (
                      <li
                        key={`payment-method-${el.id}`}
                        className={`selectable ${
                          params.paymentMethod === el.id ? "active" : ""
                        }`}
                        onClick={() => {
                          setParams((prevState) => {
                            return { ...prevState, paymentMethod: el.id };
                          });
                        }}
                      >
                        <div className="text">
                          <div className="sub">{el.name}</div>
                        </div>
                      </li>
                    );
                  })}
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
            <div>
              Subtotal ({" "}
              {carts?.items.reduce((acc, el) => {
                return acc + +el.qty;
              }, 0)}{" "}
              items)
            </div>
            <div>{priceFormat(carts?.amounts.items)}</div>
          </li>

          {!!carts?.amounts.store_discount && (
            <li className="summary-table__row">
              <div>Discount</div>
              <div>-{priceFormat(carts?.amounts.store_discount)}</div>
            </li>
          )}

          <li className="summary-table__row">
            <div>Shipping</div>
            <div>{priceFormat(carts?.amounts.shipping)}</div>
          </li>

          {!!carts?.amounts.shipping_discount && (
            <li className="summary-table__row">
              <div>Shipping Discount</div>
              <div>-{priceFormat(carts?.amounts.shipping_discount)}</div>
            </li>
          )}

          <li className="summary-table__row checkout__promo">
            <div>Discount Code/Promo Code</div>
            <div className="promo__input-group-wrapper">
              <div className="promo__input-group">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    applyPromoCode.action({
                      promo_code: promoCode,
                      shipping_address_id: params.shippingAddress,
                      courier_id: params.shippingMethod,
                    });
                  }}
                >
                  <input
                    placeholder="Code"
                    readOnly={!!(carts && carts.promo_code)}
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                    }}
                  />
                  <div className="p-relative" style={{ display: "inline" }}>
                    {carts?.promo_code ? (
                      <button
                        type="button"
                        onClick={() => {
                          applyPromoCode.action({
                            promo_code: "",
                          });
                        }}
                      >
                        Remove
                      </button>
                    ) : (
                      <button>Apply</button>
                    )}

                    {applyPromoCode.status.loading && <LoadingBtn />}
                  </div>
                </form>
              </div>
            </div>

            <div className="error-msg">
              {applyPromoCode?.error?.promo_code[0]}
            </div>
          </li>

          {carts?.promo_code && (
            <li className="summary-table__row">
              <div>Additional Discount</div>
              <div>-{priceFormat(carts?.amounts.code_discount)}</div>
            </li>
          )}

          {carts?.promo_code && (
            <li className="summary-table__row">
              <div>Additional Shipping Discount</div>
              <div>-{priceFormat(carts?.amounts.shipping_code_discount)}</div>
            </li>
          )}

          {!config.tax_included && (
            <li className="summary-table__row summary-table__tax">
              <div>Tax{config.tax_included ? " (included)" : ""} </div>
              <div>{priceFormat(carts?.amounts.tax)}</div>
            </li>
          )}

          <li className="summary-table__row summary-table__total">
            <div>Total</div>
            <div>{priceFormat(carts?.amounts.total)}</div>
          </li>
        </ul>

        <div className="checkout__confitm-btn">
          <Button
            className={`${
              params.shippingAddress &&
              (params.billingAddress || params.sameAsBilling) &&
              params.shippingMethod &&
              params.paymentMethod
                ? ""
                : "disabled"
            }`}
            onClick={() => {
              getSignature.action({
                shipping_address_id: params.shippingAddress,
                billing_address_id: params.sameAsBilling
                  ? params.shippingAddress
                  : params.billingAddress,
                payment_gateway_id: params.paymentMethod,
                courier_id: params.shippingMethod,
                delivery_intervals_id: shippingMethods.find(
                  (el) => el.id == params.shippingMethod
                )?.delivery_intervals?.length
                  ? params.deliveryIntervals
                  : -1,
              });
            }}
          >
            CONFIRM
          </Button>
        </div>
      </div>
    </Styled>
  );
}

export default Index;
