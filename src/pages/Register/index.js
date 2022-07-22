import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useProfile } from "@ysq-intl/react-redux-ysqstore";
import LoadingBtn from "../../components/LoadingBtn";
import { Button } from "../../components/styles";
import Hero from "../../components/Hero";
import { toast } from "react-toastify";

function Home() {
  const { t } = useTranslation();
  const { createProfile } = useProfile();
  const [input, setInput] = useState({
    consent: false,
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (createProfile.error === "" && createProfile.status.failure) {
      toast.error("register failed");
    }
  }, [createProfile.status]);

  return (
    <Styled>
      <Hero
        title={"CREATE ACCOUNT"}
        subtitle={
          "Create an account with us to enhance your experience with Hunn."
        }
      />
      <div className="login-form__wrapper container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProfile.action({
              ...input,
              dob: window.localStorage.getItem("dob"),
            });
          }}
        >
          <div className="form__field">
            <input
              placeholder="Enter email"
              autoComplete="off"
              value={input.email || ""}
              onChange={(e) => {
                setInput((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />
            <div className="error-msg">{createProfile.error?.email?.[0]}</div>
          </div>
          <div className="form__field">
            <input
              placeholder="Enter password"
              type="password"
              autoComplete="off"
              value={input.password || ""}
              onChange={(e) => {
                setInput((prevState) => {
                  return { ...prevState, password: e.target.value };
                });
              }}
            />

            <div className="error-msg">
              {createProfile.error?.password?.[0]}
            </div>
          </div>
          <div className="form__field">
            <input
              placeholder="Retype password"
              type="password"
              value={input.password_confirmation || ""}
              onChange={(e) => {
                setInput((prevState) => {
                  return {
                    ...prevState,
                    password_confirmation: e.target.value,
                  };
                });
              }}
            />
            <div className="error-msg">
              {createProfile.error?.password_confirmation?.[0]}
            </div>
          </div>

          <div className="login-consent consent-group">
            <label>
              <input
                type="checkbox"
                onChange={(e) => {
                  setInput((prevState) => {
                    return { ...prevState, consent: e.target.checked };
                  });
                }}
              />
              <div className="consent__marker">
                <img
                  src="/images/icons/tick.svg"
                  alt="tick"
                  width="8"
                  height="8"
                  className="consent__marker-tick"
                />
              </div>
              <p>
                By clicking “Submit”, you agree to Hunn International{" "}
                <Link to="/">Terms and Conditions</Link>
              </p>
            </label>
          </div>

          <div className="p-relative btn-wrapper">
            <Button
              className={`login-button ${input.consent ? "" : "disabled"}`}
            >
              CREATE
            </Button>
            {createProfile.status.loading && <LoadingBtn />}
          </div>
        </form>

        <div className="register">
          Already has an account? <Link to="/login">Sign In</Link>.
        </div>
      </div>
    </Styled>
  );
}

export default Home;
