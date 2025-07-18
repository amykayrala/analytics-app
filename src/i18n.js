    // src/i18n.js
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';

    import translationEN from './locales/en/translation.json';
    import translationFR from './locales/fr/translation.json';

    const resources = {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    };

    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: 'en', // default language
        keySeparator: false, // use this if you don't want keys separated by dots in translation files
        interpolation: {
          escapeValue: false, // react already safes from xss
        },
      });

    export default i18n;