import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { xl, lg, md, sm } = breakpoints;

export const Styled = styled.section`
  .container {
    margin: 48px auto;
    display: flex;
    flex-direction: row;

    .product__left {
      flex: 0 1 574px;
      margin-right: 140px;
      overflow: hidden;

      .slick-dots {
        position: initial;
        margin: 16px 0;

        li button:before {
          color: #888 !important;
        }
      }
    }

    .product__right {
      flex: 1;
      min-width: 500px;

      h2,
      h3 {
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;

        &:empty {
          display: none;
        }
      }

      p {
        font-size: 16px;
        line-height: 22px;
        white-space: pre-wrap;
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
            text-transform: uppercase;
            flex: 1;
            /* max-width: 400px; */

            > a {
              display: flex;
              align-items: center;
              padding: 16px;
              border: 1px solid transparent;
              cursor: pointer;
            }

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

        .shop-item__list-price {
          color: #4d4e56;
          font-size: 16px;
          text-decoration: line-through;
          margin-right: 12px;
        }

        .shop-item__sale-price {
        }
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
              border-left: 1px solid #1f2122;
            }
          }
        }
      }
    }
  }

  .product__review-rating {
    margin-bottom: 24px;
  }

  @media only screen and (${lg.down}) {
    .container {
      .product__left {
        margin-right: 30px;
      }
    }
  }

  @media only screen and (${xl.down}) {
    .container {
      .product__right {
        min-width: 400px;
      }
    }
  }

  @media only screen and (${md.down}) {
    .container {
      margin: 0 auto 48px auto;
      flex-direction: column;

      .product__left {
        margin-right: 0;
        background: #f6f6f6;
        margin: 0 -14px;
        flex: 1;

        img {
          width: 100%;
          margin: auto;
          display: block;
        }
      }

      .product__right {
        margin-top: 18px;
        min-width: initial;

        @media only screen and (${sm.down}) {
          .product__price {
            font-size: 24px;
            line-height: 30px;
            margin-bottom: 8px;
          }

          .product__desc,
          .product__specs {
            margin-bottom: 30px;

            &.product__specs {
              .product__spec:not(:first-child) {
                margin-top: 24px;
              }
            }
          }

          p,
          h2,
          h3,
          .product__review-action {
            font-size: 14px;
            line-height: 20px;
          }

          .product__review-count {
            font-size: 16px;
            line-height: 22px;
          }

          .product__reviews-wrapper {
            margin-top: 40px;
          }

          .product__colors-wrapper {
            .product__colors {
              flex-direction: column;

              .product__color:not(:first-child) {
                margin-left: 0;
                margin-top: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
