import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend"; // Use `i18next-http-backend` instead of `i18next-xhr-backend`
import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next) // ✅ Add this to initialize react-i18next
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: { translation: translationEn },
      es: { translation: translationEs },
    },
  });

export default i18n;
