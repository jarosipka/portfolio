
import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/style.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './components/locales/en.json';
import translationSK from './components/locales/sk.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      sk: {
        translation: translationSK,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(<App />, document.getElementById('root'));
