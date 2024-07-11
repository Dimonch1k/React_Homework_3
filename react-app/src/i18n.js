import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import answers_en from "./translations/en/global.json";
// import answers_ua from "./translations/ua/global.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          answers: [
            "Yes",
            "Absolutely!",
            "Most likely",
            "Probably",
            "Yes, definitely",
            "No",
            "Probably not",
            "Most likely not",
            "I don't know",
            "I don't have an answer for that"
          ]
        },
      },
      ua: {
        translation: {
          answers: [
            "Так",
            "Абсолютно!",
            "Наймовірніше",
            "Ймовірно",
            "Так, звичайно",
            "Ні",
            "Ймовірно ні",
            "Наймовірніше ні",
            "Я не знаю",
            "У мене немає відповіді на це"
          ]
        },
      },
      deu: {
        translation: {
          answers: [
            "Ja",
            "Unbedingt!",
            "Höchstwahrscheinlich",
            "Wahrscheinlich",
            "Ja, auf jeden Fall",
            "Nein",
            "Wahrscheinlich nicht",
            "Höchstwahrscheinlich nicht",
            "Ich weiß es nicht",
            "Darauf habe ich keine Antwort"
          ]
        },
      },
      fre: {
        translation: {
          answers: [
            "Oui",
            "Absolument !",
            "Très probablement",
            "Probablement",
            "Oui, certainement",
            "Non",
            "Probablement pas",
            "Très probablement pas",
            "Je ne sais pas",
            "Je n'ai pas de réponse à cette question"
          ]
        },
      },
    },
  });
