import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/styles";
import Hero from "../../components/Hero";

function Home() {
  const { t } = useTranslation();

  return (
    <Styled>
      <Hero
        title={"CREATE ACCOUNT"}
        subtitle={
          "Create an account with us to enhance your experience with Hunn."
        }
      />
      <div className="login-form__wrapper">
        <form>
          <div className="form__field">
            <input placeholder="Enter email" autoComplete="off" />
          </div>
          <div className="form__field">
            <input
              placeholder="Enter password"
              type="password"
              autoComplete="off"
            />
          </div>
          <div className="form__field">
            <input placeholder="Retype password" type="password" />
          </div>

          <div className="login-consent consent-group">
            <label>
              <input type="checkbox" />
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

          <Button className="login-button">CREATE</Button>
        </form>
      </div>
    </Styled>
  );
}

export default Home;
