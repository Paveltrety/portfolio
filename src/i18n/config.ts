import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../public/translations/en/common.json';
import ru from '../../public/translations/ru/common.json';

const DEFAULT_LANG = 'ru';

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  supportedLngs: ['ru', 'en'],
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      common: ru,
    },
    en: {
      common: en,
    },
  },
});

export default i18n;
