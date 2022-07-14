import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";
import { animated } from "react-spring";

const { sm, md } = breakpoints;

export const Styled = styled(animated.div)`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  .modal-content {
    width: 550px;
    max-width: 100%;
    background: #fff;
    padding: 32px;
    margin: auto;

    @media only screen and (${sm.down}) {
      padding: 14px;
    }

    .modal__header {
      font-size: 24px;
      line-height: 30px;
      font-weight: bold;
      margin-bottom: 24px;
    }
  }

  @media only screen and (${sm.down}) {
    .modal-content {
      .modal__header {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
`;
