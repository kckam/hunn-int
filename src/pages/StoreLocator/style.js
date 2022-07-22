import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { md } = breakpoints;

export const Styled = styled.section`
  .container {
    margin: 48px auto;

    .pac-container {
      z-index: 100000;
    }

    .map-outer-wrapper {
      border-radius: 6px;

      .input-group {
        position: relative;
        width: 80%;
        margin: 0 auto 2rem auto;

        @media only screen and (${md.down}) {
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 0;
          font-size: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          left: 5px;
        }

        input {
          border: 1px solid #c6c6c6;
          height: 48px;
          width: 100%;
        }
      }

      .map-wrapper {
        display: flex;
        justify-content: center;

        @media only screen and (${md.down}) {
          flex-direction: column;
        }

        .left-col {
          flex: 0 0 300px;
          padding: 0 1rem;
          border: 1px solid #c6c6c6;

          @media only screen and (${md.down}) {
            flex: 1;
            margin-bottom: 2rem;
          }

          .listed-place {
            > li {
              cursor: pointer;

              &:hover {
                opacity: 0.5;
              }

              .title {
                font-weight: bold;
              }

              &:not(:first-child) {
                padding-top: 2rem;
                border-top: 1px solid #c6c6c6;
              }
            }

            @media only screen and (${md.down}) {
              display: flex;
              flex-direction: row;
              overflow-x: auto;
              overflow-y: hidden;
              padding-bottom: 1rem;

              > li {
                min-width: 180px;

                &:not(:first-child) {
                  padding-top: 0;
                  border-top: none;
                  padding: 0 2rem;
                  border-left: 1px solid #707070;
                }

                &:first-child {
                  padding-left: 0;
                  padding-right: 2rem;
                }
              }
            }
          }
        }

        .right-col {
          flex: 1;
        }
      }
    }
  }
`;
