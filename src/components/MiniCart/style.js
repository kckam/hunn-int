import styled from "styled-components";

export const Styled = styled.div`
  .mini-cart__dropdown-wrapper {
    left: initial;
    right: -30px;
    transform: none;

    &:before {
      left: initial;
      right: 22px;
    }

    .mini-cart__dropdown {
      display: flex;
      margin-bottom: 24px;

      .left {
        flex: 0 0 64px;
        margin-right: 16px;

        .product__image {
          border: 1px solid #c6c6c6;
        }
      }

      .right {
        flex: 1;
        font-size: 14px;
        line-height: 20px;
        .product__name {
          font-weight: bold;
        }
      }
    }

    .cart-btn {
      display: block;
      text-align: center;
      background: #1f2122;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      width: 100%;
      max-width: 100%;
      padding: 12px;
      cursor: pointer;
    }
  }
`;
