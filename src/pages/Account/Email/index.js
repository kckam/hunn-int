import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Button, Form } from "../../../components/styles";

function Index() {
  const { t } = useTranslation();

  return (
    <Styled>
      <div className="email-container account-container">
        <Form className="profile-form" autoComplete="off">
          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Current Password</label>
                <input placeholder="Enter current password" />
              </div>
              <div className="error-msg">this is an error this is an error</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>New email</label>
                <input placeholder="Enter new email" />
              </div>
              <div className="error-msg">this is an error this is an error</div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Retype new email</label>
                <input placeholder="Retype new email" />
              </div>
              <div className="error-msg">this is an error this is an error</div>
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
