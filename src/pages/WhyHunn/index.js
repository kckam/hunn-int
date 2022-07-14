import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";

function Index() {
  const { t } = useTranslation();

  return (
    <Styled>
      <Hero
        extended={true}
        title={"FOR YOU, WITH YOU"}
        subtitle={
          "Find out why Hunn is your next best thing in enhancing the tobacco experience."
        }
      />

      <div className="container">
        <div className="content">
          <img
            src="https://dummyimage.com/360x450/000/fff"
            width="360"
            height="450"
            alt="simple"
          />

          <h2>SIMPLE</h2>

          <p>
            Hunn is developed as an easy alternative aiming to improve an
            everyday ritual for tobacco users, without compromising their
            enjoyment.
            <br />
            <br />
            We seek to provide a seamless transition and improve the tobacco
            experience - reducing unpleasant smells, smoke or ash through smart
            technology.
          </p>
        </div>

        <div className="content">
          <img
            src="https://dummyimage.com/360x450/000/fff"
            width="360"
            height="450"
            alt="smart"
          />

          <h2>SMART</h2>

          <p>
            Every heated moment with Hunn is enhanced through our innovative
            heated tobacco technology.
            <br />
            <br />
            Designed with a ceramic induction pin, every moment is heated evenly
            to bring forward a well-rounded taste and maximum experience.
          </p>
        </div>

        <div className="content">
          <img
            src="https://dummyimage.com/360x450/000/fff"
            width="360"
            height="450"
            alt="experience"
          />

          <h2>EXPERIENCE</h2>

          <p>
            Designed for convenience, the Hunn device tackles issues faced by
            modern smokers.
            <br />
            <br />
            It incorporates modern accessories, such as a fitted casing for an
            extra layer of protection and is easy to use with the touch of a
            single button.
          </p>
        </div>
      </div>
    </Styled>
  );
}

export default Index;
