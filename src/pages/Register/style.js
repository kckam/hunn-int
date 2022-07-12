import styled from "styled-components";

export const Styled = styled.section`
  .login-form__wrapper {
    width: 450px;
    margin: 48px auto;

    .form__field {
      &:not(:first-child) {
        margin-top: 24px;
      }

      input {
        height: 48px;
        width: 100%;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .login-consent {
      margin-top: 24px;
    }

    .login-button {
      margin-top: 24px;
    }
  }
`;
