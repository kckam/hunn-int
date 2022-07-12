import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { sm, xl, xxl } = breakpoints;

export const StyledHome = styled.section`
  .slick-slide {
    line-height: 0;

    img {
      margin: auto;
      width: 100%;
      object-position: center right;
      height: 80vh;
      object-fit: cover;
    }
  }
`;
