import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/styles";
import Hero from "../../components/Hero";

function Home() {
  const { t } = useTranslation();

  return (
    <Styled>
      <Hero title={"???"} />
      <div className="login-form__wrapper container">
        <form>
          <div className="form__field">
            <input placeholder="Enter email" />
          </div>

          <Button className="login-button">RESET PASSWORD</Button>
        </form>

        <div className="register">
          Or return to <Link to="/login">Sign In</Link>.
        </div>
      </div>
    </Styled>
  );
}

export default Home;
