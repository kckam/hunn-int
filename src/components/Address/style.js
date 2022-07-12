import styled, { css } from "styled-components";

export const Styled = styled.div`
  .addresses {
    .address {
      position: relative;
      border: 1px solid transparent;

      &.active {
        border: 1px solid #000;
      }

      &:not(:first-child) {
        margin-top: 30px;
      }

      background: #f6f6f6;
      padding: 24px 24px 57px 24px;

      .address__header {
        display: flex;
        justify-content: space-between;
        .address__name {
          font-weight: bold;
        }

        .address__actions {
          display: flex;

          > li {
            cursor: pointer;
            text-decoration: underline;

            &:last-child {
              margin-left: 21px;
              color: #ff1a46;
            }

            &:first-child {
              color: #29bcb9;
            }
          }
        }
      }

      .address__body {
        margin-top: 18px;
        line-height: 22px;
      }
    }
  }
`;
