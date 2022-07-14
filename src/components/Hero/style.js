import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm } = breakpoints;

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

    &.extended {
      /* min-height: 360px; */
    }

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

  @media only screen and (${sm.down}) {
    .hero {
      min-height: 220px;

      &__title {
        font-size: 24px;
        line-height: 30px;
      }

      &__subtitle {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media only screen and (${sm.down}) {
    .hero {
      &.extended {
        justify-content: flex-start;
        padding-top: 60px;
        min-height: 330px;
      }
    }
  }
`;
