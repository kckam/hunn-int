import React from "react";
import { Link } from "react-router-dom";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return <Styled>{t("general.warning")}</Styled>;
}
