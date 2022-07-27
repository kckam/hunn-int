import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { xl, lg, md, sm } = breakpoints;

export const Styled = styled.section`
  .container {
    display: flex;
    flex-direction: row;
    margin: -60px auto 48px auto;

    > .content {
      flex: 1;

      &:not(:first-child) {
        margin-left: 130px;
      }

      h2 {
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        margin-top: 32px;
        color: #1f2122;
      }

      p {
        margin-top: 16px;
        font-size: 16px;
        line-height: 22px;
        color: #4d4e56;
      }
    }
  }

  @media only screen and (${xl.down}) {
    .container {
      > .content {
        &:not(:first-child) {
          margin-left: 60px;
        }
      }
    }
  }

  @media only screen and (${lg.down}) {
    .container {
      > .content {
        &:not(:first-child) {
          margin-left: 30px;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (${lg.down}) {
    .container {
      flex-direction: column;
      align-items: center;

      > .content {
        flex: initial;
        /* width: 360px;
        max-width: 100%; */
        &:not(:first-child) {
          margin-left: 0;
          margin-top: 30px;
        }
      }

      @media only screen and (${sm.down}) {
        margin-top: -50px;

        > .content {
          h2 {
            font-size: 24px;
            line-height: 30px;
            margin-top: 20px;
          }

          p {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
`;
