import i18n from 'i18next';
import en from './en.json'
import ru from './ru.json'
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init(
    {
        debug: true,
        fallbackLng: 'ru',
        defaultNS: "ns1",
        resources: {
            en: {
                ns1: en,
            },
            ru: {
                ns1: ru,
            }
        }
    }
);

export default i18n;