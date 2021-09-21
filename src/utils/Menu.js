
import Products from './../components/Products'
import About from './../components/About';
import MyProfile from './../components/MyProfile';
import Orders from './../components/Orders';
import Employees from './../components/Employees';
import Contact from './../components/Contact';
import Login from './../components/Login';
import Registration from './../components/Registration';
import Cart from './../components/Cart';
import AddEmployee from './components/AddEmployee';

const MenuItems = {
    homePage: {
        label: "Products",
        component: Products,
        route: '/home',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    about: {
        label: "About",
        component: About,
        route: '/about-us',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    orders: {
        label: "Orders",
        component: Orders,
        route: '/orders',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    myProfile: {
        label: "My Profile",
        component: MyProfile,
        route: '/my-profile',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    employees: {
        label: "Employees",
        component: Employees,
        route: '/employees',
        roles: ['ROLE_ADMIN']
    },
    addEmployee: {
        label: "Add Employee",
        component: AddEmployee,
        route: '/add-employee',
        roles: ['ROLE_ADMIN']
    },
    contact: {
        label: "Contact",
        component: Contact,
        route: '/contact',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    login: {
        label: "Login",
        component: Login,
        route: '/login',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    registration: {
        label: "Registration",
        component: Registration,
        route: '/registration',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    cart: {
        label: "Cart",
        component: Cart,
        route: '/cart',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    }
};

export default MenuItems;