import styled from "styled-components";
import breakpoints from "../../config/breakpoint";
import { animated } from "react-spring";

const { lg } = breakpoints;

export const Styled = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  color: #fff;
  z-index: 100;
  background: #000;

  .nav__item--active {
    color: #7ed6d4;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .header-nav {
      display: flex;
      align-items: center;
      font-weight: 500;

      &__item {
        font-size: 14px;
        cursor: pointer;

        &:not(:first-child) {
          margin-left: 42px;
        }

        &--active {
          color: #7ed6d4;
        }

        &.has-child {
          position: relative;
          display: flex;
          align-items: center;

          .dropdown-icon {
            margin-left: 10px;
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 8px solid #fff;
            transition: transform 0.15s ease-in;

            &.active {
              transform: rotate(180deg);
            }
          }

          .dropdown__item {
            &:not(:first-child) {
              margin-top: 12px;
            }

            &--active {
              color: #7ed6d4;
              pointer-events: none;
            }
          }
        }

        &.header-cart {
          position: relative;

          .header-cart__counter {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #ff1f1f;
            position: absolute;
            right: 0;
            top: 0;
            font-size: 10px;
            font-weight: bold;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(50%, -50%);
          }
        }
      }

      .header-hamburger {
        display: none;
        width: 24px;
        height: 18px;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid transparent;

        &--active {
          height: 24px;
          > div {
            transform: translateX(-80%);
            opacity: 0;
            transition: transform 0.1s ease-out, opacity 0.2s ease-out;
          }

          &:before {
            transform: rotate(45deg) translate(7px, 7px);
            transition: transform 0.1s ease-in;
          }

          &:after {
            transform: rotate(-45deg) translate(7px, -7px);
            transition: transform 0.1s ease-in;
          }
        }

        &:before,
        &:after {
          content: "";
          height: 2px;
          background: #fff;
          will-change: transform;
        }

        > div {
          height: 2px;
          background: #fff;
          will-change: transform;
        }
      }

      @media only screen and (${lg.down}) {
        .header-nav__item:not(.header-cart):not(.header-hamburger) {
          display: none !important;
        }

        .header-nav__item:not(:first-child) {
          margin-left: 0;
        }

        .header-nav__item.header-hamburger {
          display: flex;
          margin-left: 20px;
        }
      }
    }
  }
`;

export const StyledMobileMenu = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #1f2122;
  z-index: 10000;

  .nav__item--active {
    color: #7ed6d4;
  }

  .mobile-nav {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 32px;

    > .mobile-nav__item {
      &:not(:first-child) {
        margin-top: 40px;
      }

      &.has-child {
        position: relative;
        display: flex;
        align-items: center;

        .dropdown-icon {
          margin-left: 10px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 8px solid #fff;
          transition: transform 0.15s ease-in;

          &.active {
            transform: rotate(180deg);
          }
        }

        .dropdown {
          position: absolute;
          color: #ccc;
          width: 220px;
          left: 0%;
          top: 25px;
          padding: 0.5rem 0 1rem 1rem;
          font-size: 14px;

          &__item {
            &:not(:first-child) {
              margin-top: 12px;
            }

            &--active {
              color: #7ed6d4;
              pointer-events: none;
            }
          }
        }
      }
    }
  }
`;
