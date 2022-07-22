import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Button, Form } from "../../../components/styles";
import { useProfile } from "@ysq-intl/react-redux-ysqstore";
import LoadingBtn from "../../../components/LoadingBtn";
import { toast } from "react-toastify";

function Index() {
  const { t } = useTranslation();
  const { updateProfileEmail } = useProfile();
  const [input, setInput] = useState({
    password: "",
    new_email: "",
    new_email_confirmation: "",
  });

  useEffect(() => {
    if (updateProfileEmail.status.success) {
      toast("Successfully updated.");
    } else if (updateProfileEmail.status.failure) {
      toast.error("Operation failed.");
    }
  }, [updateProfileEmail.status]);

  return (
    <Styled>
      <div className="email-container account-container">
        <Form
          className="profile-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            updateProfileEmail.action({
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
                {updateProfileEmail.error?.password?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>New email</label>
                <input
                  placeholder="Enter new email"
                  value={input.new_email}
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, new_email: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="error-msg">
                {updateProfileEmail.error?.new_email?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Retype new email</label>
                <input
                  placeholder="Retype new email"
                  value={input.new_email_confirmation}
                  onChange={(e) => {
                    setInput((prevState) => {
                      return {
                        ...prevState,
                        new_email_confirmation: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="error-msg">
                {updateProfileEmail.error?.new_email_confirmation?.[0]}
              </div>
            </div>
          </div>

          <div className="form__submit p-relative">
            <Button>UPDATE</Button>
            {updateProfileEmail.status.loading && <LoadingBtn />}
          </div>
        </Form>
      </div>
    </Styled>
  );
}

export default Index;
