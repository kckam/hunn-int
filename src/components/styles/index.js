import styled from "styled-components";
import breakpoints from "../../config/breakpoint";
import { animated } from "react-spring";

const { sm, md } = breakpoints;

export const Button = styled.button`
  background: ${({ invert }) => (invert ? "#fff" : "#1F2122")};
  color: ${({ invert }) => (invert ? "#1F2122" : "#fff")};
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  width: ${({ width = "100%" }) => width};
  max-width: 100%;
  padding: 12px;
  cursor: pointer;
  border: 1px solid #000;

  @media only screen and (${sm.down}) {
    width: 100%;
  }
`;

export const Form = styled.form`
  .form-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    &:not(:first-child) {
      margin-top: 24px;
    }

    .error-msg {
      flex: 0 0 100%;
    }

    &__cell {
      flex: 1;

      &:not(:first-child) {
        margin-left: 14px;
      }

      .form-row__input {
        label {
          display: block;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 8px;
          white-space: nowrap;
        }
      }

      input,
      select,
      textarea {
        height: 48px;
        border: 1px solid #c6c6c6;
        width: 100%;
        font-size: 16px;
      }

      textarea {
        height: initial;
      }
    }

    @media only screen and (${sm.down}) {
      flex-direction: column;

      &.multi {
        .form-row__cell:not(:first-child) .form-row__input label {
          display: none;
        }
      }

      &__cell {
        flex: 1;

        &:not(:first-child) {
          margin-left: 0;
          margin-top: 24px;
        }
      }
    }
  }

  .form__submit {
    margin-top: 34px;
    display: flex;
    flex: 1;
    > button {
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 14px;
      }
    }

    @media only screen and (${sm.down}) {
      flex-direction: column;

      > button {
        &:not(:first-child) {
          margin-left: 0;
          margin-top: 14px;
        }
      }
    }
  }
`;

export const RowItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c6c6c6;
  padding-bottom: 24px;
  margin-bottom: 24px;

  &:not(:first-child) {
  }

  .item__image {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    flex: 0 1 114px;

    .item__image {
      margin-right: 16px;
    }
  }

  .item__details {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-left: 16px;

    .item__name {
      flex: 1;
      font-weight: bold;
      line-height: 22px;
    }

    .item__qty {
      display: flex;
      white-space: nowrap;
      flex: 0 0 110px;
      margin: 0 12px;

      > * {
        height: 36px;
        border: 1px solid #c6c6c6;
        background: #fff;
        font-weight: bold;
      }

      button {
        display: block;
        width: 36px;
        cursor: pointer;
      }

      input {
        width: calc(100% - 72px);
        text-align: center;
        font-size: 16px;
        margin: 0 -1px;
        padding: 0;
      }
    }

    .item__price {
      flex: 0 0 100px;
      white-space: nowrap;
      text-align: right;
    }
  }

  @media only screen and (${md.down}) {
    align-items: initial;

    &.item__header {
      display: none;
    }

    .item__details {
      flex-direction: column;
      align-items: initial;

      > div {
        flex: initial !important;
        text-align: left !important;

        &.item__qty {
          margin: 12px 0;
          width: 120px;
          max-width: 100%;
        }
      }
    }
  }

  /* &.item__header {
    > div {
      &:nth-child(1) {
        flex: 0 0 114px;
      }

      &:nth-child(2) {
        margin-left: 16px;
      }

      &:nth-child(3) {
      }
    }
  } */
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 54px;
  font-weight: bold;
  color: #000;

  @media only screen and (${sm.down}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PolicyPage = styled.section`
  .container {
    margin: 48px auto;

    a {
      color: #29bcb9;
      text-decoration: underline;
    }

    h1 {
      margin-bottom: 32px;
    }

    .term-item__body {
      margin-top: 0.5rem;
      font-size: 16px;
      line-height: 22px;
    }

    .term-item {
      &:not(:first-child) {
        margin-top: 2rem;
      }

      &__header {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        margin-top: 32px;
      }
    }

    ol {
      margin: 1rem 0;
      list-style-type: decimal;
      list-style-position: inside;
      text-indent: -1em;
      padding-left: 1em;

      li:before {
        counter-increment: list;
        position: absolute;
        left: -1.5em;
      }

      &[type="a"],
      &[type="i"] {
        list-style: none;
        text-indent: 0;
        padding-left: 1.5rem;
        counter-reset: list;

        &[type="a"] li:before {
          content: "(" counter(list, lower-alpha) ") ";
        }

        &[type="i"] li:before {
          content: "(" counter(list, lower-roman) ") ";
        }
      }

      > li {
        position: relative;
        &:not(:first-child) {
          margin-top: 1rem;
        }
      }
    }

    @media only screen and (${sm.down}) {
      .term-item {
        &__header {
          font-size: 16px;
          line-height: 22px;
        }
      }

      .term-item__body {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  background: #fff;
  color: #1f2122;
  width: ${({ width = "220px" }) => width};
  left: 50%;
  transform: translateX(-50%);
  top: 35px;
  padding: 20px;
  box-shadow: -3px 3px 0px #0000001a;
  border: 1px solid #c6c6c6;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    top: 0;
    left: 50%;
    transform: translate(-50%, -70%);
  }
`;
