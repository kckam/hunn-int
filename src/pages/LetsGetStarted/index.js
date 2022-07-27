import { useState, useEffect } from "react";
import i18n from "i18next";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Title } from "../../components/styles";
import { Link } from "react-router-dom";

function Index() {
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
    <Styled>
      <div className="container">
        <Title>LET'S GET STARTED</Title>

        <ul className="item-list">
          {!contents
            ? "loading"
            : contents.map((el, i) => {
                return (
                  <li key={`step-${i}`} className="item">
                    <div className="item__header">
                      <h2 className="item__title">{el.title}</h2>
                    </div>

                    <div className="item__body">{el.content}</div>
                  </li>
                );
              })}
        </ul>
      </div>
    </Styled>
  );
}

export default Index;
