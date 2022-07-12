import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm, xl, xxl } = breakpoints;

export const Styled = styled.section`
  display: flex;
  flex-direction: row;
  margin: 48px auto;

  > div {
    &.checkout__steps-wrapper {
      flex: 1;
      margin-right: 80px;

      .checkout__steps {
        margin-top: 24px;

        > li {
          &:not(:first-child) {
            margin-top: 16px;
            border-top: 1px solid #eeeeee;
            padding-top: 16px;
          }
          .step__title {
            font-weight: bold;
          }

          .step__content {
            margin-top: 16px;
          }

          > .content-wrapper .step__content {
            /* height: 0; */
            overflow: hidden;
          }

          .shipping-methods,
          .payment-methods {
            > li {
              line-height: 22px;
              position: relative;
              border: 1px solid transparent;
              background: #f6f6f6;
              padding: 24px;
            }
          }

          .billing-address {
            margin-top: -16px;

            .step__content {
              .marker {
                width: 16px;
                height: 16px;
                border: 1px solid #707070;
              }
            }
          }
        }
      }

      @media only screen and (${xxl.up}) {
        margin-right: 250px;
      }
    }

    &.checkout-summary {
      flex: 0 0 500px;

      .summary-table {
        margin-top: 24px;

        .summary-table__row {
          display: flex;
          justify-content: space-between;

          &.checkout__promo {
            flex-direction: column;
            border-top: 1px solid #eeeeee;
            padding-top: 30px;

            .promo__input-group-wrapper {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 10px;

              .promo__input-group {
                input {
                  height: 36px;
                  border: 1px solid #c6c6c6;
                  width: 130px;
                  max-width: 100%;
                  font-size: 16px;
                  font-weight: 500;
                  margin-right: 50px;
                  text-align: center;
                  padding: 0 12px;
                }

                button {
                  height: 36px;
                  background: #000;
                  color: #fff;
                  font-size: 16px;
                  padding: 0 20px;
                }
              }

              .promo__discount-price {
                white-space: nowrap;
              }

              @media only screen and (${sm.down}) {
                flex-direction: column;
                align-items: initial;

                .promo__input-group {
                  display: flex;
                  input {
                    flex: 1;
                    margin-right: -1px;
                  }
                }

                .promo__discount-price {
                  margin-top: 10px;
                  text-align: right;
                }
              }
            }
          }

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

      .checkout__confitm-btn {
        margin-top: 40px;
      }
    }

    .checkout__title {
      font-size: 24px;
      font-weight: bold;
    }
  }

  @media only screen and (${xl.down}) {
    flex-direction: column;

    > div {
      &.checkout__steps-wrapper {
        margin-right: 0;

        .checkout__steps > li .billing-address {
          margin-top: 16px;
        }
      }

      &.checkout-summary {
        margin-top: 30px;
        flex: 1;
      }
    }
  }
`;
