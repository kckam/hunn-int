import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Button, Form } from "../../../components/styles";
import { useProfile } from "@ysq-intl/react-redux-ysqstore";
import LoadingBtn from "../../../components/LoadingBtn";
import { toast } from "react-toastify";

function Index() {
  const { t } = useTranslation();
  const { updateProfilePassword } = useProfile();

  const [input, setInput] = useState({
    new_password: "",
    new_password_confirmation: "",
    password: "",
  });

  useEffect(() => {
    if (updateProfilePassword.status.success) {
      toast("Successfully updated.");
    } else if (updateProfilePassword.status.failure) {
      toast.error("Operation failed.");
    }
  }, [updateProfilePassword.status]);

  return (
    <Styled>
      <div className="email-container account-container">
        <Form
          className="profile-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            updateProfilePassword.action({
              ...input,
            });
          }}
        >
          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Current Password</label>
                <input
                  placeholder="Enter current password"
                  type="password"
                  value={input.password}
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, password: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="error-msg">
                {updateProfilePassword.error?.password?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>New password</label>
                <input
                  placeholder="Enter password"
                  type="password"
                  value={input.new_password}
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, new_password: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="error-msg">
                {updateProfilePassword.error?.new_password?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Retype password</label>
                <input
                  placeholder="Retype password"
                  type="password"
                  value={input.new_password_confirmation}
                  onChange={(e) => {
                    setInput((prevState) => {
                      return {
                        ...prevState,
                        new_password_confirmation: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="error-msg">
                {updateProfilePassword.error?.new_password_confirmation?.[0]}
              </div>
            </div>
          </div>

          <div className="form__submit p-relative">
            <Button>UPDATE</Button>
            {updateProfilePassword.status.loading && <LoadingBtn />}
          </div>
        </Form>
      </div>
    </Styled>
  );
}

export default Index;
