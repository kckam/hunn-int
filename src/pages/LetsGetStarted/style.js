import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm } = breakpoints;

export const Styled = styled.section`
  .container {
    margin: 48px auto;

    h1 {
      margin-bottom: 32px;
    }

    .item-list {
      .item {
        position: relative;
        font-size: 16px;
        line-height: 22px;

        &:not(:first-child) {
          margin-top: 70px;
        }

        .item__header {
          display: inline-flex;
          justify-content: space-between;

          .item__title {
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
            display: inline;
            text-transform: uppercase;
          }
        }

        .item__body {
          ol {
            margin: 32px 0;
            list-style-type: decimal;
            list-style-position: inside;
            text-indent: -1.5em;
            padding-left: 1.5em;
            list-style: none;
            text-indent: 0;
            padding-left: 1.5rem;
            counter-reset: list;

            li:before {
              counter-increment: list;
              position: absolute;
              left: -1.5em;
              content: counter(list, decimal);
              background: #1f2122;
              color: #fff;
              width: 24px;
              height: 24px;
              text-align: center;
              font-weight: bold;
              line-height: 24px;
            }

            > li {
              position: relative;
              padding-left: 0.5rem;
              &:not(:first-child) {
                margin-top: 3rem;
              }

              .images {
                margin-top: 20px;
                img {
                  &:not(:first-child) {
                    margin-left: 90px;
                  }
                }

                @media only screen and (${sm.down}) {
                  margin-left: -2rem;
                  img {
                    display: block;
                    margin: 22px auto 0 auto !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (${sm.down}) {
    .container {
      .item-list {
        .item {
          font-size: 14px;
          line-height: 20px;

          .item__header {
            .item__title {
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
`;
