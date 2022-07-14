import styled, { css } from "styled-components";

export const Styled = styled.div`
  .icon-wrapper {
    position: relative;
    display: inline-block;

    .empty-icons,
    .filled-icons {
      > svg {
        &:not(:first-child) {
          /* margin-left: 5px; */
        }
      }
    }

    .empty-icons {
      color: #ccc;
      display: inline-block;
    }

    .filled-icons {
      position: absolute;
      top: 0;
      left: 0;
      color: #1f2122;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      width: 0%;
    }
  }
`;
