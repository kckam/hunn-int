import { useEffect, useState } from "react";
import { StyledFaq } from "./style";
import { Link, useLocation } from "react-router-dom";
import i18n from "i18next";
import { Title } from "../../components/styles";
import Hero from "../../components/Hero";
import { scrollTo } from "../../utils";

function toggleQ(parent) {
  if (parent.classList.contains("item__question--active")) {
    closeQ(parent);
  } else {
    openQ(parent);
  }
}

function openQ(parent) {
  parent.classList.add("item__question--active");
  parent.querySelector(".item__answer-wrapper").style.height =
    parent.querySelector(".item__answer").offsetHeight +
    parseInt(
      window.getComputedStyle(parent.querySelector(".item__answer")).marginTop
    ) +
    "px";
}

function closeQ(parent) {
  parent.classList.remove("item__question--active");
  parent.querySelector(".item__answer-wrapper").style.height = 0 + "px";
}

function Faq() {
  const { hash } = useLocation();
  const [contents, setContents] = useState(null);

  useEffect(() => {
    populate();
  }, []);

  async function populate() {
    let contents;

    switch (i18n.language) {
      case "en":
        contents = await import("./lang/en");
        break;
      case "ms":
        contents = await import("./lang/ms");
        break;
      default:
        contents = await import("./lang/en");
        break;
    }

    setContents(contents.default);
  }

  useEffect(() => {
    if (hash) {
      scrollTo(hash);
    }
  });

  return (
    <StyledFaq>
      <Hero title="QUESTIONS & TROUBLESHOOTING" />
      <div className="container">
        <ol className="item-list">
          {!contents
            ? "loading"
            : contents.map((el, i) => {
                return (
                  <li key={`q-${i}`} className="item" id={`${el.slug}`}>
                    <div className="item__header">
                      <h2 className="item__title">{el.title}</h2>
                      <ul className="item__actions">
                        <li
                          onClick={(e) => {
                            let parent = e.target.closest(".item");

                            if (parent) {
                              parent
                                .querySelectorAll(".item__question")
                                .forEach((el) => {
                                  openQ(el);
                                });
                            }
                          }}
                        >
                          Expand All
                        </li>
                        <li
                          onClick={(e) => {
                            let parent = e.target.closest(".item");

                            if (parent) {
                              parent
                                .querySelectorAll(".item__question")
                                .forEach((el) => {
                                  closeQ(el);
                                });
                            }
                          }}
                        >
                          Collapse All
                        </li>
                      </ul>
                    </div>

                    {el.questions?.map((question, index) => {
                      return (
                        <div key={`q-${i}-${index}`} className="item__question">
                          <div
                            className="question__header"
                            onClick={(e) => {
                              toggleQ(e.target.closest(".item__question"));
                            }}
                          >
                            <h3>
                              <span>{index + 1}.</span>
                              <div>{question.q}</div>
                            </h3>
                          </div>

                          <div className="item__answer-wrapper">
                            <div className="item__answer">{question.a}</div>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                );
              })}
        </ol>
      </div>
    </StyledFaq>
  );
}

export default Faq;
