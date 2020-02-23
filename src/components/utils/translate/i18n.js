import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from './resources.json';

// const language = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: "ru",

    keySeparator: false,

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;