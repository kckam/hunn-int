import { Styled } from "./style";

function Hero({ title = "", subtitle = "", extended = false }) {
  return (
    <Styled>
      <div className={`hero ${extended ? "extended" : ""}`}>
        <h1 className="hero__title">{title}</h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
      </div>
    </Styled>
  );
}

export default Hero;
