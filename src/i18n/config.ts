import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const locales = ['en', 'ru'];

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  supportedLngs: locales,
  defaultNS: 'common',
  ns: ['common', 'books'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      common: require('../../public/locales/en/common.json'),
      books: require('../../public/locales/en/books.json'),
    },
    ru: {
      common: require('../../public/locales/ru/common.json'),
      books: require('../../public/locales/ru/books.json'),
    },
  },
});

export default i18n;
