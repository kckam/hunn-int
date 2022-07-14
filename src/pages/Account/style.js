import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { lg, sm } = breakpoints;

export const Styled = styled.section`
  .inner-container {
    position: relative;
    margin: 48px auto;
    display: flex;
    flex-direction: row;

    .chevron {
      display: none;
      border-style: solid;
      border-width: 2px 2px 0 0;
      height: 10px;
      width: 10px;
      transform: rotate(135deg);
      position: absolute;
      top: 5px;
      right: 14px;
      pointer-events: none;
    }

    .account__nav-chosen-wrapper {
      display: none;

      .account__nav--chosen {
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;
        cursor: pointer;
        background: #fff;
        color: #7ed6d4;

        @media only screen and (${sm.down}) {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }

    .account__navs-wrapper {
      flex: 0 0 270px;
      margin-right: 90px;

      @media only screen and (${lg.up}) {
        height: auto !important;
        opacity: 1 !important;
      }

      .chevron {
        transform: rotate(315deg);
        top: 10px;
      }

      .account__navs {
        .account__nav {
          font-size: 24px;
          line-height: 30px;
          font-weight: bold;
          cursor: pointer;

          @media only screen and (${sm.down}) {
            font-size: 18px;
            line-height: 24px;
          }

          a {
            display: block;
          }

          &--active {
            color: #7ed6d4;
          }

          &:not(:first-child) {
            margin-top: 16px;
          }
        }
      }
    }

    .account__content {
      flex: 1;
    }

    @media only screen and (${lg.down}) {
      display: block;

      &.active {
        .account__navs-wrapper {
          .chevron {
            display: block;
          }
        }
      }

      .account__nav-chosen-wrapper {
        .chevron {
          display: block;
        }
      }

      .account-container {
        max-width: initial;
      }

      .account__nav-chosen-wrapper {
        display: flex;
        cursor: pointer;
      }

      .account__navs-wrapper {
        overflow: hidden;
        margin-right: 0;
        margin-bottom: 36px;
      }

      .account__navs {
        > li {
          /* background: #ccc; */
        }
      }
    }
  }
`;
