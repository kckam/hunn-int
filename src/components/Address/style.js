import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm } = breakpoints;

export const Styled = styled.div`
  .addresses {
    .address {
      position: relative;

      &:not(:first-child) {
        margin-top: 16px;
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

          @media only screen and (${sm.down}) {
            font-size: 14px;
            line-height: 20px;

            > li:last-child {
              margin-left: 12px;
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
