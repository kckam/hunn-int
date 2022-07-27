import React, { useState, useEffect } from "react";
import { Styled } from "./style";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Title, PolicyPage } from "../../components/styles";

export default function Index() {
  const { t } = useTranslation();
  const [contents, setContents] = useState(null);

  useEffect(() => {
    populate();
  }, []);

  async function populate() {
    let contents;

    switch (i18n.language) {
      case "en":
        contents = await import("./lang/en");
        break;
      case "ms":
        contents = await import("./lang/ms");
        break;
      default:
        contents = await import("./lang/en");
        break;
    }

    setContents(contents.default);
  }

  return (
    <PolicyPage>
      {/* {t("item", { count: 1, ordinal: true })} */}
      <div className="container">
        <Title>PRIVACY NOTICE</Title>
        <ul className="term-list">
          {!contents
            ? "loading"
            : contents.map((el, i) => {
                return (
                  <li key={`term-${i}`} className="term-item">
                    <h2 className="term-item__header">{el.header}</h2>
                    <div className="term-item__body">{el.body}</div>
                  </li>
                );
              })}
        </ul>
      </div>
    </PolicyPage>
  );
}
