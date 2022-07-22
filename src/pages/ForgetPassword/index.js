import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/styles";
import LoadingBtn from "../../components/LoadingBtn";
import Hero from "../../components/Hero";
import { useSpecial } from "@ysq-intl/react-redux-ysqstore";
import { toast } from "react-toastify";

function Home() {
  const { t } = useTranslation();
  const [input, setInput] = useState({ email: "" });
  const { resetPassword } = useSpecial();

  useEffect(() => {
    if (resetPassword.error === "" && resetPassword.status.failure) {
      toast.error("reset failed");
    } else if (resetPassword.status.success) {
      toast.success("Please check your inbox to reset password.");
    }
  }, [resetPassword.status]);

  return (
    <Styled>
      <Hero title={"???"} />
      <div className="login-form__wrapper container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            resetPassword.action(input);
          }}
        >
          <div className="form__field">
            <input
              placeholder="Enter email"
              value={input.email || ""}
              onChange={(e) => {
                setInput((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />
            <div className="error-msg">{resetPassword.error?.email?.[0]}</div>
          </div>

          <div className="p-relative btn-wrapper">
            <Button className="login-button">RESET PASSWORD</Button>
            {resetPassword.status.loading && <LoadingBtn />}
          </div>
        </form>

        <div className="register">
          Or return to <Link to="/login">Sign In</Link>.
        </div>
      </div>
    </Styled>
  );
}

export default Home;
