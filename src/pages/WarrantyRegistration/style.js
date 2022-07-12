import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm, lg } = breakpoints;

export const Styled = styled.section`
  .error-msg {
    display: none;
  }

  .container {
    margin: 48px auto;

    > form {
      @media only screen and (${lg.up}) {
        display: flex;

        > div {
          &:not(:first-child) {
            margin-left: 16px;
          }
        }
      }

      > div {
        flex: 1;

        @media only screen and (${lg.down}) {
          &.body__right {
            margin-top: 16px;
          }
        }

        .btn {
          white-space: nowrap;
          font-size: 16px;
          text-decoration: underline;
          cursor: pointer;

          &.btn__delete {
            font-size: 14px;
            color: #ff1a46;
          }

          &.btn__upload {
            color: #29bcb9;
            margin-top: 28px;
          }
        }

        .add-serial__row {
          &:not(:first-child) {
            border-top: 1px solid #707070;
            padding-top: 24px;
          }

          .add-serial__action {
            flex: 0;
            text-align: right;

            @media only screen and (${sm.down}) {
              margin-top: 16px;
              .form-row__input {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;

                .btn__upload {
                  margin-top: 0;
                  margin-right: 16px;
                }

                .btn__delete {
                  font-size: 16px;
                }
              }
            }
          }
        }

        .section__add-more-device {
          display: flex;
          margin-top: 27px;

          > * {
            flex: 1;

            &.btn__add-more-device {
              color: #29bcb9;
            }
          }

          @media only screen and (${sm.down}) {
            flex-direction: column;

            .btn__add-more-device {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
`;
