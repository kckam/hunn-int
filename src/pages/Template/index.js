import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Index() {
  const { t } = useTranslation();

  return (
    <Styled>
      {t("hello")} omg<Link to="/">Profile</Link>
    </Styled>
  );
}

export default Index;
