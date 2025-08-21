import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import pl from "./locales/pl.json";
import sl from "./locales/sl.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      "pl-PL": { translation: pl },
      "pl-SP": { translation: sl },
    },
    fallbackLng: "pl-PL",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
