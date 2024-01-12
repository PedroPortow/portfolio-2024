import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPTBR from './locales/pt-BR/translation.json';

// as traduções
const resources = {
  en: {
    translation: translationEN
  },
  'pt-BR': {
    translation: translationPTBR
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    },
    detection: {
      order: ['navigator'],
    }
  });

export default i18n;
