import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import breakpoints from "../../config/breakpoint";
import i18n from "i18next";

const { lg } = breakpoints;

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
      <Hero
        extended={true}
        title={"FOR YOU, WITH YOU"}
        subtitle={
          "Find out why Hunn is your next best thing in enhancing the tobacco experience."
        }
        bg={"why-hunn"}
      />

      <div className="container">
        {!contents
          ? "loading"
          : contents.map((el, i) => (
              <div className="content" key={`content-${i}`}>
                <picture>
                  <source
                    media={`(${lg.down})`}
                    srcSet={el.image.md}
                    width="800"
                    height="320"
                  />

                  <img
                    loading="lazy"
                    src={el.image.lg}
                    alt={el.image.header}
                    width="360"
                    height="450"
                  />
                </picture>

                <h2>{el.header}</h2>

                <p>{el.body}</p>
              </div>
            ))}
      </div>
    </Styled>
  );
}

export default Index;
