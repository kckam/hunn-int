import { useState, useEffect } from "react";
import i18n from "i18next";

function useLanguageFile(files) {
  const [contents, setContents] = useState(null);

  useEffect(() => {
    populate();
  }, []);

  async function populate() {
    let contents;

    switch (i18n.language) {
      case "en":
        contents = await import(files["en"]);
        break;
      case "ms-MY":
        contents = await import(files["ms-MY"]);
        break;
      default:
        contents = await import(files["en"]);
        break;
    }

    setContents(contents.default);
  }
  return [contents]; // update the state to force render
}

export default useLanguageFile;
