import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma por defecto si no se encuentra la traducción
    supportedLngs: ['en', 'es'], // Lista de idiomas soportados
    backend: {
      loadPath: '/local/{{lng}}/{{ns}}.json', // Ruta donde se encuentran las traducciones
    },
    react: { 
      useSuspense: false // Opcional, si es true, habilita el modo Suspense
    }
});

export default i18n;
