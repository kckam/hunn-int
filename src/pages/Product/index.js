import { useState, useContext } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Button, Form } from "../../components/styles";
import RatingStars from "../../components/RatingStars";
import { useSprings, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { AppContext } from "../../Routes";
import Modal from "../../components/Modal";

let NUMBER_OF_REVIEW_IN_A_PAGE = 3;

const REVIEWS = [
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 5,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
  {
    title: "Perfect - Good Price, Fast Delivery and Fresh Battery",
    rating: 3.7,
    text: "Seems to be brand new and handle gives bright light and normal battery life. Box was a bit dusty and aged. Not sure how old the unit was, but it appears new(not the box though) working well.",
  },
];

function Index() {
  const { t } = useTranslation();
  const { appDispatch } = useContext(AppContext);
  const { productId } = useParams();
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reviewInput, setReviewInput] = useState({
    rating: 3,
    headline: "",
    comment: "",
  });
  const [ref, { width: innerWidth }] = useMeasure();
  let totalPageOfReviews = Math.ceil(
    REVIEWS.length / NUMBER_OF_REVIEW_IN_A_PAGE
  );

  const [reviewProps, reviewApi] = useSprings(totalPageOfReviews, (i) => ({
    from: {
      x: 0,
    },
    to: {
      x: 0,
    },
    // delay: 1000,
  }));

  return (
    <Styled>
      <div className="container">
        <div className="product__left">
          <img
            src="https://dummyimage.com/600x600/000/fff"
            width="574"
            height="574"
          />
        </div>
        <div className="product__right" ref={ref}>
          <img
            src="/images/logo-black.svg"
            width="99"
            height="40"
            alt="hunn logo"
          />

          <h1 className="product__name">Model M</h1>

          <div className="product__colors-wrapper">
            <h2>Colours</h2>
            <ul className="product__colors">
              <li
                className={`product__color ${
                  true ? "product__color--active" : ""
                }`}
              >
                <div
                  className="product__color-marker"
                  style={{ background: "#4D4E56" }}
                ></div>
                <span className="product__color-label">SPACE GREY</span>
              </li>

              <li className="product__color">
                <div
                  className="product__color-marker"
                  style={{ background: "#7ED6D4" }}
                ></div>
                <span className="product__color-label">OASIS BLUE</span>
              </li>
            </ul>
          </div>

          <div className="product__price">RM80.00</div>

          <div className="product__desc">
            <p>
              User-friendly and durable, the Hunn Model M is designed to make
              the transition into a smarter alternative fuss-free.
              <br />
              <br />
              The device features an even heating system which delivers maximum
              satisfaction with every use. It also incorporates a casing for
              protection against heat or scratches.
            </p>
          </div>

          <ul className="product__specs">
            <li className="product__spec">
              <h2>What’s in the box</h2>

              <p>
                HUNN Model M Device <br />
                HUNN cleaning brush <br />
                Charging cable
              </p>
            </li>

            <li className="product__spec">
              <h2>Dimensions</h2>

              <p>21 x 17.5 x 92mm</p>
            </li>
          </ul>

          <Button
            onClick={() => {
              appDispatch({
                type: "SHOW_MINI_CART",
                payload: {
                  name: `MODEL M SPACE GREY`,
                  qty: 1,
                  img: "",
                },
              });
            }}
          >
            ADD TO CART
          </Button>

          <div className="product__reviews-wrapper">
            <div className="product__review-header">
              <div className="product__review-overall">
                <h2 className="product__review-count">
                  REVIEWS ({REVIEWS.length})
                </h2>
                <div
                  className="product__review-action"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Write a review
                </div>
              </div>

              <div className="product__overall-rating">
                <RatingStars value={3.5} />
                <div className="product__overall-rating-score"> 3.9 Stars</div>
              </div>
            </div>
            <div className="product__reviews-pagination">
              <div className="product__reviews-pagination-inner-wrapper">
                {reviewProps.map((styles, index) => {
                  return (
                    <animated.div
                      key={`review-${index}`}
                      style={{ width: `${innerWidth}px`, ...styles }}
                      className={`review-page-${index} review-page`}
                    >
                      <ul className="product__reviews">
                        {REVIEWS.slice(
                          index * NUMBER_OF_REVIEW_IN_A_PAGE,
                          (index + 1) * NUMBER_OF_REVIEW_IN_A_PAGE
                        ).map((review, j) => (
                          <li
                            className="product__review"
                            key={`review-${index}-${j}`}
                          >
                            <h3 className="product__review-title">
                              {review.title}
                            </h3>
                            <div className="product__review-stars">
                              <RatingStars value={review.rating} />
                            </div>
                            <p className="product__review-desc">
                              {review.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </animated.div>
                  );
                })}
              </div>
            </div>

            <ul className="product__reviews-pagination-action">
              <li
                className={`${currentReviewPage > 0 ? "" : "disabled"}`}
                onClick={() => {
                  if (currentReviewPage > 0) {
                    setCurrentReviewPage((prev) => prev - 1);
                    reviewApi.start(() => {
                      return { x: (currentReviewPage - 1) * -innerWidth };
                    });
                  }
                }}
              >
                Prev Page
              </li>
              <li
                className={`${
                  currentReviewPage < totalPageOfReviews - 1 ? "" : "disabled"
                }`}
                onClick={() => {
                  if (currentReviewPage < totalPageOfReviews - 1) {
                    setCurrentReviewPage((prev) => prev + 1);
                    reviewApi.start(() => {
                      return { x: (currentReviewPage + 1) * -innerWidth };
                    });
                  }
                }}
              >
                Next Page
              </li>
            </ul>
          </div>
        </div>
      </div>

      {
        <Modal show={showModal} setShow={setShowModal}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2 className="modal__header">WRITE YOUR REVIEW</h2>

            <div className="product__review-rating">
              <RatingStars
                readOnly={false}
                size={"md"}
                value={reviewInput.rating}
                cb={(rating) => {
                  setReviewInput((prev) => ({ ...prev, rating }));
                }}
              />
            </div>

            <Form>
              <div className="form-row">
                <div className="form-row__cell">
                  <div className="form-row__input">
                    <label>First name</label>
                    <input placeholder="Enter first name" />
                  </div>
                  <div className="error-msg">
                    this is an error this is an error
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-row__cell">
                  <div className="form-row__input">
                    <label>First name</label>
                    <input placeholder="Enter first name" />
                  </div>
                  <div className="error-msg">
                    this is an error this is an error
                  </div>
                </div>
              </div>
              <div className="form__submit">
                <Button>SUBMIT</Button>
                <Button
                  type="button"
                  invert={true}
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CANCEL
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      }
    </Styled>
  );
}

export default Index;
