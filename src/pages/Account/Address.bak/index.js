import { useState } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Form, Button } from "../../../components/styles";
import { useTransition, animated } from "react-spring";

function Index() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: "none" },
  });

  return (
    <Styled>
      {transition((styles, show) => {
        return show ? (
          <animated.div style={styles} className="account-container">
            <Form
              className="profile-form"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                setShow(false);
              }}
            >
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

                <div className="form-row__cell">
                  <div className="form-row__input">
                    <label>Last name</label>
                    <input placeholder="Enter last name" />
                  </div>
                  <div className="error-msg">this is an error</div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-row__cell">
                  <div className="form-row__input">
                    <label>Mobile</label>
                    <input placeholder="Enter mobile" />
                  </div>
                  <div className="error-msg">this is an error</div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-row__cell">
                  <div className="form-row__input">
                    <label>Address</label>
                    <textarea rows={4} />
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

              <div className="form__submit">
                <Button>UPDATE</Button>
                <Button
                  type="button"
                  invert={true}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  CANCEL
                </Button>
              </div>
            </Form>
          </animated.div>
        ) : (
          <animated.div style={styles}>
            <ul className="addresses">
              <li className="address">
                <div className="address__header">
                  <div className="address__name">Alexa</div>
                  <ul className="address__actions">
                    <li
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      Edit
                    </li>
                    <li>Delete</li>
                  </ul>
                </div>

                <div className="address__body">
                  <p>
                    +6033445566 <br />
                    <br />
                    No. 403 (A1), Shwe Taung Kyar Street, Bahan Township, Yangon
                    11201, Myanmar
                  </p>
                </div>
              </li>{" "}
              <li className="address">
                <div className="address__header">
                  <div className="address__name">Alexa</div>
                  <ul className="address__actions">
                    <li
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      Edit
                    </li>
                    <li>Delete</li>
                  </ul>
                </div>

                <div className="address__body">
                  <p>
                    +6033445566 <br />
                    <br />
                    No. 403 (A1), Shwe Taung Kyar Street, Bahan Township, Yangon
                    11201, Myanmar
                  </p>
                </div>
              </li>{" "}
            </ul>
            <div style={{ marginTop: "30px" }}>
              <Button
                width="220px"
                onClick={() => {
                  setShow(true);
                }}
              >
                ADD ADDRESS
              </Button>
            </div>
          </animated.div>
        );
      })}
    </Styled>
  );
}

export default Index;
