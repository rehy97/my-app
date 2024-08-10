import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files
import enTranslation from './locales/en/translation.json';
import czTranslation from './locales/cz/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  cz: {
    translation: czTranslation,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'cz', // default language
    fallbackLng: 'cz', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;