import styled from "styled-components";
import { animated } from "react-spring";

export const Styled = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999999;
  color: #fff;
`;
