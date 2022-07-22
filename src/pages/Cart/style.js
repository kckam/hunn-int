import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { xl, xxl } = breakpoints;

export const Styled = styled.section`
  display: flex;
  flex-direction: row;
  margin: 48px auto;

  .no-result {
    .no-result-header {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 25px;
    }
  }

  > div {
    &.cart-items {
      flex: 1;
      margin-right: 80px;

      @media only screen and (${xxl.up}) {
        margin-right: 250px;
      }

      .cart-items__list {
        margin-top: 24px;

        .cart-item__header {
          font-size: 16px;
          font-weight: bold;
          border-bottom: 1px solid #c6c6c6;
          padding-bottom: 16px;
          margin-bottom: 24px;
        }
      }
    }

    &.cart-summary {
      flex: 0 0 500px;

      .summary-table {
        margin-top: 24px;

        .summary-table__row {
          display: flex;
          justify-content: space-between;

          &:not(:first-child) {
            margin-top: 16px;
          }

          &.summary-table__total {
            font-weight: bold;
            padding: 24px 0;
            margin: 30px 0;
            border-top: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
          }
        }
      }

      .cart-consent {
      }

      .cart__checkout-btn {
        margin-top: 40px;
      }
    }

    .cart__title {
      font-size: 24px;
      font-weight: bold;
    }
  }

  @media only screen and (${xl.down}) {
    flex-direction: column;

    > div {
      &.cart-items {
        margin-right: 0;
      }

      &.cart-summary {
        margin-top: 30px;
        flex: 1;
      }
    }
  }
`;
