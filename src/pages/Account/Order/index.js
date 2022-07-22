import { useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { RowItem, Button } from "../../../components/styles";
import { useOrderHistories, useConfig } from "@ysq-intl/react-redux-ysqstore";
import usePriceFormat from "../../../hooks/usePriceFormat";
import moment from "moment";

function Index() {
  const { orderHistories, getOrders } = useOrderHistories();
  const { config } = useConfig();
  const navigate = useNavigate();
  const priceFormat = usePriceFormat();
  const { t } = useTranslation();

  useEffect(() => {
    getOrders.action();
  }, []);

  return (
    (getOrders.status.success || getOrders.status.failure) && (
      <Styled>
        {!orderHistories || orderHistories.length === 0 ? (
          <div className="no-result">
            <h2 className="no-result-header">Nothing here yet</h2>
            <p>Would you like to return to browsing?</p>

            <div style={{ margin: "30px 0" }}>
              <Button
                onClick={() => {
                  navigate("/shop");
                }}
              >
                View Products
              </Button>
            </div>

            <p>
              if you've made an order and do not see it reflected here, please{" "}
              <Link to="/#contact-us">contact us</Link>.
            </p>
          </div>
        ) : (
          <ul className="orders">
            {orderHistories.map((order) => (
              <li className="order" key={`order-${order.id}`}>
                <div className="order__header">
                  <div className="order__order_sn">ORDER #{order.sn}</div>
                  <div className="order__status">
                    {(() => {
                      switch (order.status) {
                        case "pending-fulfilment":
                          return "Pending Fulfilment";
                          break;
                        case "in-progress":
                          return "In Progress";
                          break;
                        case "shipped":
                          return "Shipped";
                          break;
                        case "self-collected":
                          return "Self Collected";
                          break;
                        case "cancelled":
                          return "Cancelled";
                          break;
                        default:
                          break;
                      }
                    })()}
                  </div>
                </div>

                <div className="order__body">
                  <div className="order__details">
                    <div className="body__left">
                      <div className="order__detail">
                        <label>Placed on:</label>
                        <div>
                          {moment(order.placed_on)
                            .utcOffset(order.utc)
                            .format("Y-MM-DD")}
                        </div>
                      </div>

                      <div className="order__detail">
                        <label>Shipped to:</label>
                        <div>
                          {order.shipping_address.firstname}{" "}
                          {order.shipping_address.lastname}
                          <br />
                          {order.shipping_address.address}
                          <br />
                          {order.shipping_address.adl2}
                          {", "}
                          {order.shipping_address.adl1} <br />
                          {order.shipping_address.zipcode},{" "}
                          {config.country_name}
                        </div>
                      </div>
                    </div>

                    <div className="body__right">
                      <div className="order__detail">
                        <label>Grand total:</label>
                        <div>
                          {new Intl.NumberFormat(config.iso_language_code, {
                            style: "currency",
                            currency: order.currency.currency,
                            minimumFractionDigits:
                              order.currency.currency_decimal,
                            maximumFractionDigits:
                              order.currency.currency_decimal,
                          }).format(order.total_amount)}
                        </div>
                      </div>

                      <div className="order__detail">
                        <label>Payment method:</label>
                        <div>{order.payment_gateway}</div>
                      </div>

                      {order.status === "shipped" && order.awb_no !== null && (
                        <div className="order__detail">
                          <label>AWB No:</label>
                          <div>
                            {order.shipping_tracking ? (
                              <a
                                target="_blank"
                                href={order.shipping_tracking}
                                style={{
                                  textDecoration: "underline",
                                }}
                              >
                                {order.awb_no}
                              </a>
                            ) : (
                              <>{order.awb_no}</>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="order__detail">
                        <label>Courier:</label>
                        <div>{order.courier.name}</div>
                      </div>
                    </div>
                  </div>

                  <ul className="order-items">
                    {order.items.map((item) => (
                      <RowItem
                        className="order_item"
                        key={`item-${order.id}-${item.id}`}
                      >
                        <div className="item__image">
                          <img
                            src={
                              item.details[config.default_language]
                                .galleries?.[0]?._file.src
                            }
                            alt={
                              item.details[config.default_language].galleries[0]
                                ?._file.alt
                            }
                            width="114"
                            height="114"
                            className="item__image"
                          />
                        </div>

                        <div className="item__details">
                          <div className="item__name">
                            {item.details[config.default_language].name}
                          </div>
                          <div className="item__qty">x {item.qty}</div>
                          <div className="item__price">
                            {new Intl.NumberFormat(config.iso_language_code, {
                              style: "currency",
                              currency: order.currency.currency,
                              minimumFractionDigits:
                                order.currency.currency_decimal,
                              maximumFractionDigits:
                                order.currency.currency_decimal,
                            }).format(item.qty * item.subtotal_sale_price)}
                          </div>
                        </div>
                      </RowItem>
                    ))}
                  </ul>

                  <ul className="order__summaries">
                    {!!order.code_discount_amount && (
                      <li>
                        <span className="label">Promo Code Discount</span>
                        <span className="value">
                          - {priceFormat(order.code_discount_amount)}
                        </span>
                      </li>
                    )}

                    {!!order.store_discount_amount && (
                      <li>
                        <span className="label">Store Discount</span>
                        <span className="value">
                          - {priceFormat(order.store_discount_amount)}
                        </span>
                      </li>
                    )}

                    {!!order.shipping_amount && (
                      <li>
                        <span className="label">Shipping Fee</span>
                        <span className="value">
                          {priceFormat(order.shipping_amount)}
                        </span>
                      </li>
                    )}

                    {!!order.shipping_code_discount_amount && (
                      <li>
                        <span className="label">
                          Shipping Fee Promo Code Discount
                        </span>
                        <span className="value">
                          - {priceFormat(order.shipping_code_discount_amount)}
                        </span>
                      </li>
                    )}

                    {!!order.shipping_store_discount_amount && (
                      <li>
                        <span className="label">
                          Shipping Fee Store Discount
                        </span>
                        <span className="value">
                          - {priceFormat(order.shipping_store_discount_amount)}
                        </span>
                      </li>
                    )}

                    <li>
                      <div>Tax {!!order.tax_included && "(Inclusive)"}</div>
                      <div>
                        {new Intl.NumberFormat(config.iso_language_code, {
                          style: "currency",
                          currency: order.currency.currency,
                          minimumFractionDigits:
                            order.currency.currency_decimal,
                          maximumFractionDigits:
                            order.currency.currency_decimal,
                        }).format(order.tax_amount)}
                      </div>
                    </li>

                    <li className="order-summary__total">
                      <div>Total</div>
                      <div>
                        {new Intl.NumberFormat(config.iso_language_code, {
                          style: "currency",
                          currency: order.currency.currency,
                          minimumFractionDigits:
                            order.currency.currency_decimal,
                          maximumFractionDigits:
                            order.currency.currency_decimal,
                        }).format(order.total_amount)}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Styled>
    )
  );
}

export default Index;
