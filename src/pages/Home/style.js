import styled, { css } from "styled-components";
import breakpoints from "../../config/breakpoint";

const { xs, sm, md, xl, xxl } = breakpoints;

export const StyledHome = styled.section`
  .home-banner {
    .slick-slide {
      .banner-wrapper img {
        /* height: 80vh; */
      }
    }
  }

  .promotion-banner {
    .slick-slide {
      .banner-wrapper img {
        /* height: 720px; */
      }
    }
  }

  .slick-slide {
    line-height: 0;

    .banner-wrapper img {
      margin: auto;
      width: 100%;
      object-fit: cover;

      &.left {
        object-position: center left;
      }

      &.center {
        object-position: center center;
      }

      &.right {
        object-position: center right;
      }
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 32px;
  }

  .banner-wrapper {
    position: relative;

    img {
      /* width: 100%; */
    }
  }

  .enhancement-section {
    background: url("/images/home/bg1.jpg") no-repeat;
    background-size: cover;
    padding: 70px 0;
    background-position: center;

    .enhancement-section__inner-wrapper {
      text-align: center;

      .enhancement-section__title {
        font-size: 48px;
        line-height: 54px;
        font-weight: bold;
        width: 650px;
        max-width: 100%;
        margin: 0 auto 45px auto;

        @media only screen and (${sm.down}) {
          font-size: 24px;
          line-height: 30px;
        }
      }

      .enhancement__list {
        /* display: flex; */

        .slick-dots {
          position: initial;
          margin-top: 16px;

          li button:before {
            color: #888 !important;
          }
        }

        .slick-track {
          display: flex;
          align-items: stretch;

          .slick-slide {
            height: initial;
          }

          .slick-slide.slick-current {
            & ~ .slick-active {
              position: relative;

              &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 10px;
                width: 2px;
                height: 100px;
                background: #c6c6c6;
                display: inline-block;
              }
            }
          }
        }

        .enhancement__item {
          position: relative;
          line-height: 1;
          padding: 0 20px;

          @media only screen and (${sm.down}) {
            padding: 0;
          }

          img {
            height: 120px;
            margin: auto;

            @media only screen and (${sm.down}) {
              height: 80px;
            }
          }

          h3 {
            font-size: 18px;
            line-height: 24px;
            font-weight: bold;
            margin: 25px 0;
          }

          p {
            font-size: 16px;
            line-height: 22px;

            @media only screen and (${sm.down}) {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }

      .enhancement-section__description {
        font-size: 16px;
        line-height: 22px;
        width: 800px;
        max-width: 100%;
        margin: 70px auto 0 auto;
        color: #000;

        @media only screen and (${sm.down}) {
          font-size: 12px;
          line-height: 18px;
          margin-top: 30px;
        }
      }
    }
  }

  .specs-section {
    background: url("/images/home/bg2.jpg") no-repeat;
    background-size: cover;
    padding: 90px 14px;
    color: #fff;
    text-align: center;
    background-position: center;

    .specs-container {
      width: 800px;
      max-width: 100%;
      margin: auto;
      font-size: 16px;
      line-height: 22px;

      .specs-list {
        display: flex;
        justify-content: center;

        > li {
          flex: 0 0 110px;

          &:not(:first-child) {
            margin-left: 80px;
          }

          img {
            height: 74px;
          }

          h3 {
            margin-top: 24px;
          }
        }
      }

      .specs-section__description {
        margin: 70px auto 0 auto;
      }
    }
  }

  .important {
    font-weight: bold;
    white-space: nowrap;
  }

  .deal-section {
    background: url("/images/home/bg5.jpg") no-repeat;
    background-size: cover;
    padding: 75px 0;
    color: #000;
    background-position: center;

    .container {
      display: flex;
      width: 1100px;
      max-width: 100%;
      margin: auto;
      align-items: center;

      .product-section {
        flex: 0 1 500px;
      }

      .description-section {
        flex: 1;
        min-width: 400px;
        margin-left: 60px;

        .deal__badge {
          border: 1px solid #ff8c8c;
          display: inline-block;
          padding: 5px 15px;
          color: #ff8c8c;
        }

        h3 {
          font-size: 48px;
          line-height: 56px;
          font-weight: bold;
          margin-top: 12px;
        }

        p {
          margin-top: 30px;
          font-size: 16px;
          line-height: 22px;
        }

        .buy-btn {
          display: inline-block;
          background: #1f2122;
          color: #fff;
          font-size: 18px;
          line-height: 24px;
          font-weight: 500;
          width: 250px;
          max-width: 100%;
          padding: 12px;
          cursor: pointer;
          border: 1px solid #000;
          text-align: center;
          margin-top: 50px;

          @media only screen and (${sm.down}) {
            width: 100%;
          }
        }
      }
    }
  }

  .lets-get-started-section {
    background: url("/images/home/bg3.jpg") no-repeat;
    background-size: cover;
    padding: 145px 14px;
    color: #fff;
    text-align: center;
    background-position: center;

    h3 {
      font-size: 48px;
      line-height: 56px;
      font-weight: bold;
      margin-top: 12px;
    }

    .lets-get-started__text {
      width: 800px;
      max-width: 100%;
      margin: 90px auto 110px auto;
      font-size: 24px;
      line-height: 30px;
      font-weight: 500;

      > span {
        &:not(:first-child) {
          &::before {
            content: "/";
            margin: 0 24px;
          }
        }
      }
    }

    .lets-get-started__learn-more {
      img {
        margin-left: 24px;
      }
    }
  }

  .contact-us-section {
    position: relative;
    background: url("/images/home/bg4.jpg") no-repeat;
    background-size: cover;
    padding: 160px 14px;
    color: #fff;
    text-align: center;
    background-position: center;

    /* &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
    } */

    .container {
      position: relative;
      z-index: 10;
      width: 800px;
      max-width: 100%;

      .contact-us-section__title {
        font-size: 48px;
        line-height: 54px;
        font-weight: bold;
        width: 650px;
        max-width: 100%;
        margin: 0 auto 30px auto;
      }

      .contact-us-section__description {
        font-size: 16px;
        line-height: 22px;
        width: 800px;
        max-width: 100%;
        margin: 0 auto;
      }

      .contact-list {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;

        > li {
          img {
            margin-bottom: 24px;
          }

          h3 {
            font-size: 18px;
            line-height: 24px;
            font-weight: bold;
            margin-bottom: 24px;
          }

          .contact-us__desc {
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
  }

  @media only screen and (${md.down}) {
    .specs-section {
      .specs-container {
        @media only screen and (${sm.down}) {
          font-size: 12px;
          line-height: 18px;
        }

        .specs-list {
          flex-wrap: wrap;

          > li {
            flex: 1 1 50%;
            &:not(:first-child) {
              margin-left: 0;
            }

            &:nth-child(3),
            &:nth-child(4) {
              margin-top: 30px;
            }

            @media only screen and (${xs.down}) {
              flex: 1 1 100%;
              &:not(:first-child) {
                margin-top: 30px;
              }
            }
          }
        }
      }
    }

    .deal-section {
      .container {
        flex-direction: column;

        .product-section {
          flex: 1;

          @media only screen and (${sm.down}) {
            margin: 0 -14px;
          }
        }

        .description-section {
          margin-left: 0;
          margin-top: 30px;
          text-align: center;
          min-width: initial;

          @media only screen and (${sm.down}) {
            h3 {
              font-size: 24px;
              line-height: 30px;
            }

            p {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }

    .lets-get-started-section {
      .container {
        .lets-get-started__text {
          margin: 40px auto;

          > span {
            display: block;

            &:not(:first-child) {
              margin-top: 16px;
            }

            &:before {
              display: none;
            }
          }
        }

        @media only screen and (${sm.down}) {
          h3 {
            font-size: 24px;
            line-height: 30px;
          }

          .lets-get-started__text {
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }

    .contact-us-section {
      .container {
        .contact-list {
          flex-direction: column;

          > li {
            &:not(:first-child) {
              margin-top: 30px;
            }
          }
        }
        @media only screen and (${sm.down}) {
          .contact-us-section__title {
            font-size: 24px;
            line-height: 30px;
          }

          .contact-us-section__description,
          .contact-list > li {
            .contact-us__desc {
              font-size: 14px;
              line-height: 20px;
            }

            h3 {
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
`;
