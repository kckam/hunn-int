import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm } = breakpoints;

export const Styled = styled.section`
  padding: 200px 14px;
  text-align: center;

  .result-container {
    width: 800px;
    max-width: 100%;
    margin: auto;

    .result {
      &__icon {
        margin-bottom: 20px;
      }
      &__title {
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        margin-top: 20px;
        width: 550px;
        max-width: 100%;
        margin: auto;
      }
      &__subtitle {
        font-size: 18px;
        line-height: 24px;
        margin-top: 40px;

        a {
          text-decoration: underline;
        }
      }
      &__btn {
        margin-top: 78px;
      }
    }
  }

  @media only screen and (${sm.down}) {
    .result-container {
      .result {
        &__title {
          font-size: 18px;
          line-height: 24px;
        }

        &__subtitle {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
`;
