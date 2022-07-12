import styled, { css } from "styled-components";

export const Styled = styled.section`
  .container {
    margin: 48px auto;
    display: flex;

    .product__left {
      flex: 0 1 574px;
      margin-right: 140px;
    }

    .product__right {
      flex: 1;
      min-width: 500px;

      h2,
      h3 {
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
      }

      p {
        font-size: 16px;
        line-height: 22px;
      }

      .product__name {
        font-size: 28px;
        line-height: 34px;
        font-weight: bold;
        margin-top: 6px;
      }

      .product__colors-wrapper {
        margin-top: 30px;

        h2 {
          margin-bottom: 10px;
        }

        .product__colors {
          display: flex;

          .product__color {
            display: flex;
            align-items: center;
            padding: 16px;
            border: 1px solid transparent;
            cursor: pointer;

            &:not(:first-child) {
              margin-left: 25px;
            }

            &--active {
              border: 1px solid #efefef;
            }

            &-marker {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 12px;
            }

            &-label {
            }
          }
        }
      }

      .product__price {
        font-size: 32px;
        margin-top: 20px;
        margin-bottom: 38px;
      }

      .product__desc {
        margin-bottom: 46px;
      }

      .product__specs {
        margin-bottom: 38px;

        .product__spec {
          &:not(:first-child) {
            margin-top: 38px;
          }
          h2 {
            margin-bottom: 16px;
          }
        }
      }

      .product__reviews-wrapper {
        margin-top: 90px;

        .product__review-header {
          .product__review-overall {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .product__review-action {
              text-decoration: underline;
              color: #29bcb9;
              cursor: pointer;
            }
          }

          .product__overall-rating {
            margin-top: 20px;
            display: flex;
            align-items: center;

            .product__overall-rating-score {
              margin-left: 24px;
              position: relative;
              top: 2px;
            }
          }
        }

        .product__reviews-pagination {
          .product__reviews-pagination-inner-wrapper {
            white-space: nowrap;
            overflow: hidden;

            .review-page {
              display: inline-block;
              vertical-align: top;
            }
          }

          .product__reviews {
            margin-top: 32px;
            white-space: initial;

            .product__review {
              &:not(:first-child) {
                margin-top: 50px;
              }

              .product__review-stars {
                margin-top: 16px;
              }

              .product__review-desc {
                margin-top: 16px;
              }
            }
          }
        }

        .product__reviews-pagination-action {
          margin-top: 50px;
          display: flex;

          > li {
            text-decoration: underline;
            cursor: pointer;

            &.disabled {
              opacity: 0.5;
              pointer-events: none;
            }

            &:not(:first-child) {
              margin-left: 12px;
              padding-left: 12px;
              border-left: 1px solid #000000;
            }
          }
        }
      }
    }
  }

  .product__review-rating {
    margin-bottom: 24px;
  }
`;
