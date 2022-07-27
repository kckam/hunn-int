import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "@ysq-intl/react-redux-ysqstore";
import { Button } from "../../components/styles";
import Hero from "../../components/Hero";
import LoadingBtn from "../../components/LoadingBtn";

function Home() {
  const { t } = useTranslation();
  const { search } = useLocation();
  const { login } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // useEffect(()=>{
  //   window.localStorage.setItem("prev-page", new URLSearchParams(search).get("redirect"));
  // },[])

  useEffect(() => {
    if (login.error === "" && login.status.failure) {
      toast.error("login failed");
    }
  }, [login.status]);

  return (
    <Styled>
      <Hero title={"WELCOME"} subtitle={"Sign in to say hello."} bg="auth" />
      <div className="login-form__wrapper container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login.action(input);
          }}
        >
          <div className="form__field">
            <input
              placeholder="Enter email"
              value={input.email}
              onChange={(e) => {
                setInput((prev) => ({ ...prev, email: e.target.value }));
              }}
            />

            <div className="error-msg">{login.error?.email?.[0]}</div>
          </div>
          <div className="form__field">
            <input
              placeholder="Enter password"
              value={input.password}
              onChange={(e) => {
                setInput((prev) => ({ ...prev, password: e.target.value }));
              }}
              type="password"
            />

            <div className="error-msg">{login.error?.password?.[0]}</div>
          </div>

          <div className="p-relative btn-wrapper">
            <Button className="login-button">LOGIN</Button>
            {login.status.loading && <LoadingBtn />}
          </div>

          <Link to="/forget-password" className="forget-password">
            Forget password?
          </Link>
        </form>

        <div className="register">
          Don’t have an account? <Link to="/register">Create Account</Link>
        </div>
      </div>
    </Styled>
  );
}

export default Home;
