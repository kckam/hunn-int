import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { lg, xl } = breakpoints;

export const Styled = styled.footer`
  padding: 1rem;
  background: #1f2122;
  color: #fff;
  padding: 100px 0 50px 0;

  @media only screen and (${lg.down}) {
    padding: 30px 0;
  }

  .footer-container {
    .footer-elem-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .footer-elem {
        &__title {
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
        }

        &__logo {
          transform: translateY(-50%);
        }

        &__nav {
          font-size: 14px;
          line-height: 20px;
          color: #aaaaaa;
          margin-top: 16px;
          display: grid;

          &.multi-col {
            grid-template-columns: auto auto;
            grid-column-gap: 63px;

            @media only screen and (${xl.down}) {
              grid-column-gap: 14px;
            }
          }

          > li {
            margin-top: 6px;
          }
        }
      }

      @media only screen and (${lg.down}) {
        flex-direction: column;

        .footer-elem {
          &:not(:first-child) {
            margin-top: 32px;
          }

          &__logo {
            transform: translateY(0%);
          }

          &__nav {
            &.multi-col {
              grid-template-columns: 1fr;
            }
          }
        }
      }
    }
  }

  .footer__nav {
    margin-top: 1rem;
    a {
      color: #fff;
    }
  }

  .footer__copyright {
    font-size: 12px;
    line-height: 18px;
    margin-top: 60px;
    color: #aaaaaa;
  }
`;
