import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { md } = breakpoints;

export const StyledShop = styled.section`
  .shop-items {
    margin: 48px auto;
    display: grid;
    grid-gap: 42px;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

    &.limit {
      grid-template-columns: repeat(3, 33%);
    }

    .shop-item {
      &__image {
        width: 100%;
      }
      &__desc {
        text-align: center;
        margin-top: 26px;
      }

      &__name,
      &__color {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
      }

      &__price {
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        margin-top: 20px;
        color: #1f2122;
      }

      &__ori_price {
        display: none;
      }

      &__sale {
        .shop-item__ori_price {
          display: inline;
          color: #4d4e56;
          text-decoration: line-through;
          font-weight: normal;
          margin-right: 25px;
        }

        .shop-item__sale_price {
        }
      }
    }
  }

  @media only screen and (${md.down}) {
    .shop-items {
      grid-gap: 14px;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }
  }
`;
