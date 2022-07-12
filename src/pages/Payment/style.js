import styled, { css } from "styled-components";

export const Styled = styled.section`
  padding: 200px 14px;
  text-align: center;

  .payment-container {
    width: 800px;
    max-width: 100%;
    margin: auto;

    .payment {
      &__icon {
      }
      &__title {
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        margin-top: 20px;
      }
      &__subtitle {
        font-size: 18px;
        line-height: 24px;
        margin-top: 40px;
      }
      &__btn {
        margin-top: 78px;
      }
    }
  }
`;
