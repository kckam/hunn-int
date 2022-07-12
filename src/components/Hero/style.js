import styled from "styled-components";
import { animated } from "react-spring";

export const Styled = styled.div`
  .hero {
    background-image: url("/images/hero/1.jpg");
    min-height: 360px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
    padding: 0 14px;

    &__title {
      font-size: 48px;
      line-height: 54px;
      font-weight: bold;
    }

    &__subtitle {
      font-size: 18px;
      line-height: 24px;
      margin-top: 16px;
    }
  }
`;
