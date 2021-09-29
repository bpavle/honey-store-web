import React from 'react';

import Products from '../components/Products'
import About from '../components/About';
import MyProfile from '../components/MyProfile';
import Orders from '../components/Orders';
import Employees from '../components/Employees';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Cart from '../components/Cart';
import AddEmployee from '../components/AddEmployee';
import Logout from '../components/Logout';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import i18next from 'i18next';
const MenuItems = {

    homePage: {
        label: i18next.t("Products"),
        component: Products,
        path: '/home',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER'],
        right: false
    },
    about: {
        label: i18next.t("About"),
        component: About,
        path: '/about-us',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER'],
        right: false
    },
    orders: {
        label: i18next.t("Orders"),
        component: Orders,
        path: '/orders',
        roles: ['ROLE_ADMIN', 'ROLE_SELLER'],
        right: false
    },
    myProfile: {
        label: i18next.t("My Profile"),
        component: MyProfile,
        path: '/my-profile',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_SELLER'],
        right: false
    },
    employees: {
        label: i18next.t("Employees"),
        component: Employees,
        path: '/employees',
        roles: ['ROLE_ADMIN'],
        right: false
    },
    addEmployee: {
        label: i18next.t("Add Employee"),
        component: AddEmployee,
        path: '/add-employee',
        roles: ['ROLE_ADMIN'],
        right: false
    },
    contact: {
        label: i18next.t("Contact"),
        component: Contact,
        path: '/contact',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER'],
        right: false
    },
    login: {
        label: i18next.t("Login"),
        component: Login,
        path: '/login',
        roles: ['ROLE_VISITOR'],
        right: false
    },
    registration: {
        label: i18next.t("Registration"),
        component: Registration,
        path: '/registration',
        roles: ['ROLE_VISITOR'],
        right: false
    },
    cart: {
        label: i18next.t("Cart"),
        component: Cart,
        path: '/cart',
        roles: ['ROLE_CUSTOMER'],
        right: true
    },
    logout: {
        label: i18next.t("Logout"),
        component: Logout,
        path: '/logout',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_SELLER'],
        right: false,

    }
};

export default MenuItems;