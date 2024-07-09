import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import answers_en from "./translations/en/global.json";
import answers_ua from "./translations/ua/global.json";

const index_en = Math.floor(Math.random() * Object.keys(answers_en).length);
const index_ua = Math.floor(Math.random() * Object.keys(answers_ua).length);


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          answer:
            answers_en[
              
            ],
        },
      },
      ua: {
        translation: {
          answer:
            answers_ua[
              
            ],
        },
      },
    },
  });
