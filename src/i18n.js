import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "Name": "Name",
            "Surname": "Surname",
            "Phone": "Phone",
            "Address": "Address",
            "Email": "Email",
            "Password": "Password",
            "Confirm password": "Confirm Password",
            "Add employee": "Add employee",
            "Description": "Description",
            "Price": "Price",
            "Create new product": "Create new product",
            "Total": "Total",
            "Order": "Order",
            "Contact us": "Contact us",
            "Content": "Content",
            "Send": "Send",
            "Contact": "Contact",
            "Delete": "Delete",
            "No account?": "No account?",
            "Register here": "Register here",
            "Save": "Save",
            "Amount": "Amount",
            "Resolved": "Resolved",
            "Unresolved": "Unresolved",
            "Add to cart": "Add to cart",


        }
    },
    rs: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "Name": "Име",
            "Surname": "Презиме",
            "Phone": "Телефон",
            "Address": "Адреса",
            "Email": "Емаил",
            "Password": "Шифра",
            "Confirm password": "Потврдите шифру",
            "Add employee": "Додајзапосленог",
            "Description": "Опис",
            "Price": "Цена",
            "Create new product": "Додавање новог производа",
            "Total": "Укупно",
            "Order": "Наручи",
            "Contact us": "Контактирајте нас",
            "Content": "Садржај",
            "Send": "Пошаљи",
            "Contact": "Контакт",
            "Delete": "Обриши",
            "No account?": "Немате налог?",
            "Register here": "Региструј се",
            "Save": "Сачувај",
            "Amount": "Количина",
            "Resolved": "Обрађена",
            "Unresolved": "Необрађена",
            "Add to cart": "Додај у корпу",
            "Register": "Региструј се",
            "Login": "Пријави се"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "rs", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;