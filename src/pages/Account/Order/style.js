import styled from "styled-components";
import breakpoints from "../../../config/breakpoint";

const { sm, md } = breakpoints;

export const Styled = styled.div`
  .orders {
    .order {
      &:not(:first-child) {
        margin-top: 48px;
      }

      .order__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 26px;

        .order__order_sn {
          font-weight: bold;
          font-size: 24px;
          line-height: 30px;
        }

        .order__status {
          color: #29bcb9;
        }
      }

      .order__body {
        .order__details {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #c6c6c6;

          .body__left {
            flex: 0 0 300px;

            .order__detail {
              > label {
                flex: 1;
              }

              > div {
                flex: 2;
              }
            }
          }

          .body__right {
            flex: 0 0 200px;
            text-align: right;
          }
        }

        .order-items {
          margin-top: 24px;
        }

        .order__summaries {
          margin-top: -6px;
          > li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #c6c6c6;
            padding-bottom: 18px;
            margin-bottom: 18px;

            &.order-summary__total {
              font-weight: bold;
            }
          }
        }
      }

      .order__detail {
        display: flex;
        line-height: 22px;

        &:not(:first-child) {
          margin-top: 16px;
        }

        label {
          font-weight: bold;
          white-space: nowrap;
          margin-right: 12px;
        }
      }

      @media only screen and (${md.down}) {
        .order__header {
          flex-direction: column;
          align-items: flex-start;

          .order__order_sn {
            margin-bottom: 8px;
          }
        }

        .order__body {
          .order__details {
            flex-direction: column;

            .body__left,
            .body__right {
              flex: 1;

              .order__detail {
                text-align: left;

                > label {
                  flex: 0 0 100px;
                  white-space: initial;
                }

                > div {
                  flex: 1;
                }

                @media only screen and (${sm.down}) {
                  flex-direction: column;

                  > label {
                    flex: 1;
                    white-space: initial;
                  }
                }
              }

              &.body__right {
                margin-top: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (${sm.down}) {
    .orders {
      .order {
        .order__header {
          .order__order_sn {
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;
