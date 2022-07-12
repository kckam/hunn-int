import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RowItem } from "../../../components/styles";

function Index() {
  const { t } = useTranslation();

  return (
    <Styled>
      <ul className="orders">
        <li className="order">
          <div className="order__header">
            <div className="order__order_sn">ORDER #2131231</div>
            <div className="order__status">Confirmed</div>
          </div>

          <div className="order__body">
            <div className="order__details">
              <div className="body__left">
                <div className="order__detail">
                  <label>Placed on:</label>
                  <div>2022-04-18</div>
                </div>

                <div className="order__detail">
                  <label>Shipped to:</label>
                  <div>
                    No. 403 (A1), Shwe Taung Kyar Street, Bahan Township, Yangon
                    11201, Myanmar
                  </div>
                </div>
              </div>

              <div className="body__right">
                <div className="order__detail">
                  <label>Grand total:</label>
                  <div>RM160.00</div>
                </div>

                <div className="order__detail">
                  <label>Payment method:</label>
                  <div>Visa</div>
                </div>
              </div>
            </div>

            <ul className="order-items">
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
                  <div className="item__qty">x 1</div>
                  <div className="item__price">RM 80.00</div>
                </div>
              </RowItem>
            </ul>

            <ul className="order__summaries">
              <li>
                <div>Tax (Inclusive)</div>
                <div>RM10.00</div>
              </li>

              <li className="order-summary__total">
                <div>Total</div>
                <div>RM90.00</div>
              </li>
            </ul>
          </div>
        </li>

        <li className="order">
          <div className="order__header">
            <div className="order__order_sn">ORDER #2131231</div>
            <div className="order__status">Confirmed</div>
          </div>

          <div className="order__body">
            <div className="order__details">
              <div className="body__left">
                <div className="order__detail">
                  <label>Placed on:</label>
                  <div>2022-04-18</div>
                </div>

                <div className="order__detail">
                  <label>Shipped to:</label>
                  <div>
                    No. 403 (A1), Shwe Taung Kyar Street, Bahan Township, Yangon
                    11201, Myanmar
                  </div>
                </div>
              </div>

              <div className="body__right">
                <div className="order__detail">
                  <label>Grand total:</label>
                  <div>RM160.00</div>
                </div>

                <div className="order__detail">
                  <label>Payment method:</label>
                  <div>Visa</div>
                </div>
              </div>
            </div>

            <ul className="order-items">
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
                  <div className="item__qty">x 1</div>
                  <div className="item__price">RM 80.00</div>
                </div>
              </RowItem>
            </ul>

            <ul className="order__summaries">
              <li>
                <div>Tax (Inclusive)</div>
                <div>RM10.00</div>
              </li>

              <li className="order-summary__total">
                <div>Total</div>
                <div>RM90.00</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Styled>
  );
}

export default Index;
