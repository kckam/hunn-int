import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Index() {
  const { t } = useTranslation();

  return (
    <Styled className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Styled>
  );
}

export default Index;
