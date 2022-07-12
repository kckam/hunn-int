import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Form } from "../../../components/styles";

function Index() {
  const { t } = useTranslation();

  return (
    <Styled>
      <div className="profile-container account-container">
        <h2 className="profile__title">
          Manage your contact information details.
        </h2>

        <Form className="profile-form" autoComplete="off">
          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>First name</label>
                <input placeholder="Enter first name" />
              </div>
              <div className="error-msg">this is an error this is an error</div>
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
                <label>Gender</label>
                <select>
                  <option>Choose Gender</option>
                </select>
              </div>
              <div className="error-msg">this is an error</div>
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

          <div className="form__submit">
            <Button>UPDATE</Button>
          </div>
        </Form>
      </div>
    </Styled>
  );
}

export default Index;
