import { useState } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { Form, Button } from "../../components/styles";
import { useTransition, useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [devices, setDevices] = useState([{ serial: "", img: "" }]);
  const transitions = useTransition(devices, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { display: "none" },
    delay: 300,
  });
  const [ref, { height: contentHeight }] = useMeasure({
    polyfill: ResizeObserver,
  });
  const { height } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: contentHeight,
    },
  });

  return (
    <Styled>
      <Hero
        title={"SECURE YOUR HUNN DEVICE"}
        subtitle={"Register your warranty with us."}
      />
      <div className="container">
        <Form
          className="warranty-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/warranty-success");
          }}
        >
          <div className="body__left">
            <div className="form-row">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>
                    <span className="required">*</span>Email address
                  </label>
                  <input placeholder="Enter email address" />
                </div>
                <div className="error-msg">
                  this is an error this is an error
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>
                    <span className="required">*</span>Name
                  </label>
                  <input placeholder="Enter name" />
                </div>
                <div className="error-msg">
                  this is an error this is an error
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>
                    <span className="required">*</span>Mobile
                  </label>
                  <input placeholder="Enter mobile" />
                </div>
                <div className="error-msg">
                  this is an error this is an error
                </div>
              </div>
            </div>

            <div className="form-row multi">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>Date of birth</label>
                  <select>
                    <option>Day</option>
                  </select>
                </div>
              </div>
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>&nbsp;</label>
                  <select>
                    <option>Month</option>
                  </select>
                </div>
              </div>
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>&nbsp;</label>
                  <select>
                    <option>Year</option>
                  </select>
                </div>
              </div>

              <div className="error-msg">
                this is an error this is an errorthis is an errorthis is an
                errorthis is an errorthis is an error
              </div>
            </div>

            <div className="form-row">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>Address</label>
                  <textarea rows={4} placeholder="Enter address" />
                </div>
                <div className="error-msg">this is an error</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>ADL 1</label>
                  <select>
                    <option>ADL 1</option>
                  </select>
                </div>
                <div className="error-msg">
                  this is an error this is an error
                </div>
              </div>

              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>ADL 2</label>
                  <select>
                    <option>ADL 2</option>
                  </select>
                </div>
                <div className="error-msg">this is an error</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row__cell">
                <div className="form-row__input">
                  <label>Zipcode</label>
                  <select>
                    <option>Zipcode</option>
                  </select>
                </div>
                <div className="error-msg">this is an error</div>
              </div>
            </div>
          </div>

          <div className="body__right">
            <animated.div
              className="body__right-wrapper"
              style={{
                height,
              }}
            >
              <div className="body__right-inner-wrapper" ref={ref}>
                {transitions((styles, device, _, index) => {
                  return (
                    <animated.div
                      style={styles}
                      className="form-row add-serial__row"
                      key={`device-${index}`}
                    >
                      <div className="form-row__cell">
                        <div className="form-row__input">
                          <label>
                            <span className="required">*</span>Device Serial
                            Number
                          </label>
                          <input placeholder="Enter serial" />
                        </div>
                        <div style={{ marginTop: "16px" }}>
                          <img
                            src="https://dummyimage.com/600x400/000/fff"
                            width="142"
                            height="106"
                          />
                        </div>
                      </div>

                      <div className="form-row__cell add-serial__action">
                        <div className="form-row__input">
                          <div
                            className="btn__delete btn"
                            onClick={() => {
                              setDevices((prev) =>
                                prev.filter((_, j) => j !== index)
                              );
                            }}
                          >
                            Delete
                          </div>
                          <div className="btn__upload btn">Upload Receipt</div>
                        </div>
                      </div>
                    </animated.div>
                  );
                })}
              </div>
            </animated.div>

            <div className="section__add-more-device">
              <div
                className="btn btn__add-more-device"
                onClick={() => {
                  setDevices((prev) => [...prev, { serial: "", img: "" }]);
                }}
              >
                + Add more device
              </div>
              <div style={{ textAlign: "right" }}>
                <Button width="220px">SUBMIT</Button>
                <br />
                <br />
                <div className="required" style={{ fontSize: "10px" }}>
                  *Mandatory fields.
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Styled>
  );
}

export default Index;
