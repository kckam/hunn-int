import { useState, useContext, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "../../components/styles";
import RatingStars from "../../components/RatingStars";
import { useSprings, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import {
  useProducts,
  useCarts,
  useConfig,
  useAuth,
} from "@ysq-intl/react-redux-ysqstore";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { AppContext } from "../../AppProvider";
import Modal from "../../components/Modal";
import { scrollTo } from "../../utils";
import usePriceFormat from "../../hooks/usePriceFormat";
import LoadingBtn from "../../components/LoadingBtn";

let NUMBER_OF_REVIEW_IN_A_PAGE = 3;

const settings = {
  arrows: false,
  autoplay: false,
  swipe: true,
  touchThreshold: 500,
  dots: true,
  autoplaySpeed: 5000,
};

const INITIAL_REVIEW_STATE = {
  rating: 3,
  title: "",
  decription: "",
};

function Index() {
  const { t } = useTranslation();
  const { appDispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { addToCart } = useCarts();
  const { auth } = useAuth();
  const { products, createProductReview } = useProducts();
  const { config } = useConfig();
  const { productId } = useParams();
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [reviewInput, setReviewInput] = useState(INITIAL_REVIEW_STATE);
  const [totalPageOfReviews, setTotalPageOfReviews] = useState(0);
  const [ref, { width: innerWidth }] = useMeasure({ polyfill: ResizeObserver });

  const priceFormat = usePriceFormat();
  const [reviewProps, reviewApi] = useSprings(totalPageOfReviews, () => ({
    from: {
      x: 0,
    },
    to: {
      x: 0,
    },
  }));
  useEffect(() => {
    let product = products.find((product) => product.id === +productId);
    setProduct(product);
    setTotalPageOfReviews(
      Math.ceil(product.product_reviews.length / NUMBER_OF_REVIEW_IN_A_PAGE)
    );
  }, [products, productId]);

  useEffect(() => {
    if (addToCart.status.success) {
      appDispatch({
        type: "SHOW_MINI_CART",
        payload: {
          name: product.details[config.default_language]?.name,
          qty: 1,
          img:
            product.details[config.default_language]?.galleries?.[0]?._file
              .src || "https://cdn.ysqhub.com/staging/hunn/no-image.svg",
        },
      });
    } else if (addToCart.status.failure) {
      toast.error("Operation failed.");
    }
  }, [addToCart.status]);

  useEffect(() => {
    if (createProductReview.status.success) {
      toast("Successfully submit.");
      setShowModal(false);
      setReviewInput(INITIAL_REVIEW_STATE);
    } else if (createProductReview.status.failure) {
      toast.error("Operation failed.");
    }
  }, [createProductReview.status]);

  return (
    product && (
      <Styled>
        <div className="container">
          <div className="product__left">
            <Slider {...settings} className="galleries">
              {product.details[config.default_language]?.galleries.map(
                (el, i) => {
                  return (
                    <div key={`galleries-${i}`}>
                      <img
                        src={
                          el._file.src ||
                          "https://cdn.ysqhub.com/staging/hunn/no-image.svg"
                        }
                        alt={el._file.alt}
                        width="574"
                        height="574"
                      />
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
          <div className="product__right" ref={ref}>
            {product.details[config.default_language]?.brand.toLowerCase() ===
              "hunn" && (
              <img
                src="/images/logo-black.svg"
                width="99"
                height="40"
                alt="hunn logo"
              />
            )}

            <h1 className="product__name">
              {product.details[config.default_language]?.short_name}
            </h1>

            <div className="product__colors-wrapper">
              <h2>Colours</h2>
              <ul className="product__colors">
                <li
                  className={`product__color ${
                    true ? "product__color--active" : ""
                  }`}
                >
                  <Link to={`/product/${product.id}`}>
                    <div
                      className="product__color-marker"
                      style={{
                        background:
                          product.details[config.default_language]?.color_code,
                      }}
                    ></div>
                    <span className="product__color-label">
                      {product.details[config.default_language]?.color}
                    </span>
                  </Link>
                </li>

                {product.similar_products.map((el) => (
                  <li
                    className="product__color"
                    key={`similar-product-${el.id}`}
                  >
                    <Link to={`/product/${el.id}`}>
                      <div
                        className="product__color-marker"
                        style={{
                          background:
                            el.details[config.default_language]?.color_code,
                        }}
                      ></div>
                      <span className="product__color-label">
                        {el.details[config.default_language]?.color}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product__price">
              {product.list_price !== product.sale_price && (
                <span className="shop-item__list-price">
                  {priceFormat(product.list_price)}
                </span>
              )}

              <span className="shop-item__sale-price">
                {priceFormat(product.sale_price)}
              </span>
            </div>

            {/* <div className="product__desc">
              <p>
                User-friendly and durable, the Hunn Model M is designed to make
                the transition into a smarter alternative fuss-free.
                <br />
                <br />
                The device features an even heating system which delivers
                maximum satisfaction with every use. It also incorporates a
                casing for protection against heat or scratches.
              </p>
            </div> */}

            <ul className="product__specs">
              {JSON.parse(
                product.details[config.default_language]?.description
              ).map((el, i) => (
                <li className="product__spec" key={`spec-${i}`}>
                  <h2>{el.title}</h2>

                  <p>{el.desc}</p>
                </li>
              ))}
            </ul>

            <div className="p-relative">
              <Button
                onClick={() => {
                  auth
                    ? addToCart.action({
                        id: product.id,
                        qty: 1,
                      })
                    : navigate("/login");
                }}
              >
                ADD TO CART
              </Button>
              {addToCart.status.loading && <LoadingBtn />}
            </div>

            <div id="product-reviews" className="product__reviews-wrapper">
              <div className="product__review-header">
                <div className="product__review-overall">
                  <h2 className="product__review-count">
                    REVIEWS ({product.product_reviews.length})
                  </h2>
                  {!product.product_reviewed && (
                    <div
                      className="product__review-action"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Write a review
                    </div>
                  )}
                </div>
                {!!product.product_reviews.length && (
                  <div className="product__overall-rating">
                    <RatingStars
                      value={
                        Math.round(
                          (product.product_reviews.reduce(
                            (acc, el) => acc + +el.rating,
                            0
                          ) /
                            product.product_reviews.length) *
                            10
                        ) / 10
                      }
                    />
                    <div className="product__overall-rating-score">
                      {Math.round(
                        (product.product_reviews.reduce(
                          (acc, el) => acc + +el.rating,
                          0
                        ) /
                          product.product_reviews.length) *
                          10
                      ) / 10}{" "}
                      Stars
                    </div>
                  </div>
                )}
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
                          {product.product_reviews
                            .slice(
                              index * NUMBER_OF_REVIEW_IN_A_PAGE,
                              (index + 1) * NUMBER_OF_REVIEW_IN_A_PAGE
                            )
                            .map((review, j) => (
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
                                  {review.description}
                                </p>
                              </li>
                            ))}
                        </ul>
                      </animated.div>
                    );
                  })}
                </div>
              </div>
              {totalPageOfReviews > 1 && (
                <ul className="product__reviews-pagination-action">
                  <li
                    className={`${currentReviewPage > 0 ? "" : "disabled"}`}
                    onClick={() => {
                      if (currentReviewPage > 0) {
                        setCurrentReviewPage((prev) => prev - 1);
                        reviewApi.start(() => {
                          return { x: (currentReviewPage - 1) * -innerWidth };
                        });

                        scrollTo("#product-reviews");
                      }
                    }}
                  >
                    Prev Page
                  </li>
                  <li
                    className={`${
                      currentReviewPage < totalPageOfReviews - 1
                        ? ""
                        : "disabled"
                    }`}
                    onClick={() => {
                      if (currentReviewPage < totalPageOfReviews - 1) {
                        setCurrentReviewPage((prev) => prev + 1);
                        reviewApi.start(() => {
                          return { x: (currentReviewPage + 1) * -innerWidth };
                        });

                        scrollTo("#product-reviews");
                      }
                    }}
                  >
                    Next Page
                  </li>
                </ul>
              )}
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

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  createProductReview.action(product.id, reviewInput);
                }}
              >
                <div className="form-row">
                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>Headline</label>
                      <input
                        placeholder="Enter headline"
                        value={reviewInput.title}
                        onChange={(e) => {
                          setReviewInput((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="error-msg">
                      {createProductReview.error?.title?.[0]}
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>Comment</label>
                      <textarea
                        placeholder="Enter comment"
                        value={reviewInput.description}
                        rows={4}
                        onChange={(e) => {
                          setReviewInput((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="error-msg">
                      {createProductReview.error?.description?.[0]}
                    </div>
                  </div>
                </div>
                <div className="form__submit">
                  <div className="p-relative">
                    <Button>SUBMIT</Button>
                    {createProductReview.status.loading && <LoadingBtn />}
                  </div>

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
    )
  );
}

export default Index;
