import styled, { css } from "styled-components";
import { animated } from "react-spring";
import breakpoints from "../../config/breakpoint";

const { sm } = breakpoints;

export const Styled = styled(animated.div)`
  background: #1f2122 url("/images/hero/1.jpg") no-repeat;
  background-size: cover;
  color: #fff;
  overflow: auto;
  padding: 48px 0;
  min-height: 100vh;

  .content {
    width: 1000px;
    max-width: 100%;
    /* margin: auto; */
    padding: 0 16px;
    text-align: center;

    &__logo {
    }

    &__disclaimer {
      margin-top: 27px;
      font-size: 20px;
      line-height: 26px;
      color: #7ed6d4;
    }

    &__dob-section {
      margin-top: 60px;

      .dob-section__header {
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;
      }

      .dob-section__input-group {
        margin-top: 48px;
        display: flex;
        justify-content: center;

        .dob-section__input-wrapper {
          &:not(:first-child) {
            margin-left: 40px;
          }

          .dob-section__input-label {
            display: block;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 16px;
            text-align: left;
          }

          .dob-section__input {
            display: flex;

            input {
              width: 56px;
              height: 64px;
              border: 1px solid #c6c6c6;
              background: transparent;
              text-align: center;
              font-size: 32px;
              font-weight: bold;
              color: #fff;
              padding: 12px;

              &:not(:first-child) {
                margin-left: 8px;
              }
            }
          }
        }

        @media only screen and (${sm.down}) {
          flex-direction: column;
          margin-top: 16px;

          .dob-section__input-wrapper {
            &:not(:first-child) {
              margin-left: 0;
              margin-top: 16px;
            }

            .dob-section__input-label {
              text-align: center;
              font-size: 14px;
              line-height: 20px;
            }

            .dob-section__input {
              justify-content: center;
            }
          }
        }
      }
    }

    .error-msg {
      margin-top: 30px;
    }
  }

  @media only screen and (${sm.down}) {
    .content {
      &__logo {
        img {
          width: 130px;
        }
      }

      &__disclaimer {
        font-size: 16px;
        line-height: 22px;
      }

      &__dob-section {
        margin-top: 30px;

        .dob-section__header {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
`;
