import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTransition } from "react-spring";
import moment from "moment";

function Index({ setShowAgeVerification, showAgeVerification }) {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const ageTransition = useTransition(showAgeVerification, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (showAgeVerification) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "initial";
    }
  }, [showAgeVerification]);

  useEffect(() => {
    document
      .querySelectorAll(".content__dob-section input")
      .forEach((target) => target.addEventListener("input", inputHandler));

    return () => {
      document
        .querySelectorAll("input")
        .forEach((target) => target.removeEventListener("input", inputHandler));
    };
  }, []);

  function inputHandler(e) {
    let nextId = document.getElementById(
      `input-${+e.target.getAttribute("id").split("-")[1] + 1}`
    );

    if (nextId) {
      nextId.focus();
      nextId.select();
    }

    check();
  }

  function check() {
    try {
      let dateString = "";
      document
        .querySelectorAll(".content__dob-section input")
        .forEach(({ value }, index) => {
          if (!value) {
            throw new Error("invalid date");
          }
          dateString =
            dateString + value + (index === 1 || index === 3 ? "-" : "");
        });

      let diff = moment().diff(moment(dateString, "DD-MM-YYYY"), "years");

      if (diff <= 18 || isNaN(diff) || diff > 150) {
        setError(true);
        return false;
      }

      setShowAgeVerification(false);
      return true;
    } catch (error) {
      // console.log("invalid date");
    }
  }

  return ageTransition((styles, show) => {
    return (
      show && (
        <Styled style={styles}>
          <div className="content">
            <div className="content__logo">
              <img src="/images/logo.svg" width="257" height="104" />
            </div>

            <p className="content__disclaimer">
              You must be 18 and over to access the Hunn website, which contains
              information for adult tobacco users within Malaysia.
            </p>

            <div className="content__dob-section">
              <div className="dob-section__header">
                ENTER YOUR DATE OF BIRTH
              </div>
              <div className="dob-section__input-group">
                <div className="dob-section__input-wrapper">
                  <label className="dob-section__input-label">DAY</label>
                  <div className="dob-section__input">
                    <input
                      type="text"
                      id="input-1"
                      placeholder="D"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                    <input
                      type="text"
                      id="input-2"
                      placeholder="D"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="dob-section__input-wrapper">
                  <label className="dob-section__input-label">MONTH</label>
                  <div className="dob-section__input">
                    <input
                      type="text"
                      id="input-3"
                      placeholder="M"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                    <input
                      type="text"
                      id="input-4"
                      placeholder="M"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="dob-section__input-wrapper">
                  <label className="dob-section__input-label">YEAR</label>
                  <div className="dob-section__input">
                    <input
                      type="text"
                      id="input-5"
                      placeholder="Y"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                    <input
                      type="text"
                      id="input-6"
                      placeholder="Y"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                    <input
                      type="text"
                      id="input-7"
                      placeholder="Y"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                    <input
                      type="text"
                      id="input-8"
                      placeholder="Y"
                      maxLength={1}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>
            </div>

            {error && <div className="error-msg">Please check your date.</div>}
          </div>
        </Styled>
      )
    );
  });
}

export default Index;
