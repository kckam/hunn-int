import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { lg } = breakpoints;

export const StyledFaq = styled.section`
  .container {
    margin: 48px auto;

    .item-list {
      list-style-type: upper-alpha;
      list-style-position: inside;
      /* text-indent: -1em;
      padding-left: 1em; */

      .item {
        position: relative;
        margin-top: 3rem;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;

        .item__header {
          display: inline-flex;

          .item__title {
            display: inline;
            text-transform: uppercase;
          }

          .item__actions {
            position: absolute;
            display: flex;
            font-weight: initial;
            right: 0;
            color: #29bcb9;
            font-size: 14px;
            text-decoration: underline;

            > li {
              cursor: pointer;
              &:not(:first-child) {
                margin-left: 1rem;
              }
            }
          }
        }

        @media only screen and (${lg.down}) {
          .item__header {
            display: inline;

            .item__actions {
              position: initial;
              margin-top: 12px;
            }
          }
        }

        .item__question {
          font-weight: normal;
          border: 1px solid #c6c6c6;
          padding: 15px;
          margin-top: 24px;

          a {
            text-decoration: underline;
            color: #29bcb9;
          }

          .item__answer-wrapper {
            height: 0;
            overflow: hidden;
            transition: height ease-in 0.15s;

            .item__answer {
              /* display: none; */
              margin-top: 12px;
            }
          }

          .question__header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            cursor: pointer;

            h3 {
              display: flex;
              font-weight: 500;

              > span {
                margin-right: 0.5rem;
              }
            }

            &::after {
              content: "+";
              transform: scale(2);
            }
          }

          &.item__question--active {
            .question__header h3 {
              font-weight: bold;
            }

            .question__header::after {
              content: "-";
            }

            .item__answer {
              display: block;
            }
          }
        }
      }
    }
  }
`;
