import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const languageDetector = new LanguageDetector();
let myDetector = {
  name: "myDetectors",

  lookup(options) {
    const lang = window.location.pathname.split("/")[1];
    return lang || "en";
  },

  cacheUserLanguage(lng, options) {},
};

languageDetector.addDetector(myDetector);

i18n.use(Backend);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    supportedLngs: ["en", "ms"],
    load: "currentOnly",
    detection: {
      order: ["myDetectors"],
    },
    backend: {
      backendOptions: [
        {
          expirationTime: 0 * 24 * 60 * 60 * 1000, //0 day
        },
      ],
    },
  });
