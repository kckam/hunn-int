import React from "react";
import { Link, useInRouterContext } from "react-router-dom";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";

export default function Index() {
  const inContext = useInRouterContext();
  const { t } = useTranslation();
  return (
    <Styled>
      Nah
      {inContext ? (
        <Link to="/">{t("back")}</Link>
      ) : (
        <a href="/">{t("back")}</a>
      )}
    </Styled>
  );
}
