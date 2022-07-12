import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/styles";
import Hero from "../../components/Hero";

function Home() {
  const { t } = useTranslation();

  return (
    <Styled>
      <Hero title={"WELCOME"} subtitle={"Sign in to say hello."} />
      <div className="login-form__wrapper">
        <form>
          <div className="form__field">
            <input placeholder="Enter email" />
          </div>
          <div className="form__field">
            <input placeholder="Enter password" type="password" />
          </div>

          <Button className="login-button">LOGIN</Button>

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
