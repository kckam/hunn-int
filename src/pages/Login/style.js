import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm } = breakpoints;

export const Styled = styled.section`
  .login-form__wrapper {
    width: 450px;
    max-width: 100%;
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
        border: 1px solid #c6c6c6;
      }
    }

    .forget-password {
      color: #29bcb9;
      text-decoration: underline;
      margin-top: 16px;
      display: block;
      text-align: center;
    }

    .register {
      margin-top: 56px;
      text-align: center;

      a {
        color: #29bcb9;
        text-decoration: underline;
        font-weight: bold;
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
