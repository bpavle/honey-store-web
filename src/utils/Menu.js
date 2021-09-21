
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

const MenuItems = {
    homePage: {
        label: "Products",
        component: Products,
        path: '/home',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    about: {
        label: "About",
        component: About,
        path: '/about-us',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    orders: {
        label: "Orders",
        component: Orders,
        path: '/orders',
        roles: ['ROLE_ADMIN', 'ROLE_SELLER']
    },
    myProfile: {
        label: "My Profile",
        component: MyProfile,
        path: '/my-profile',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_SELLER']
    },
    employees: {
        label: "Employees",
        component: Employees,
        path: '/employees',
        roles: ['ROLE_ADMIN']
    },
    addEmployee: {
        label: "Add Employee",
        component: AddEmployee,
        path: '/add-employee',
        roles: ['ROLE_ADMIN']
    },
    contact: {
        label: "Contact",
        component: Contact,
        path: '/contact',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER']
    },
    login: {
        label: "Login",
        component: Login,
        path: '/login',
        roles: ['ROLE_VISITOR']
    },
    registration: {
        label: "Registration",
        component: Registration,
        path: '/registration',
        roles: ['ROLE_VISITOR']
    },
    cart: {
        label: "Cart",
        component: Cart,
        path: '/cart',
        roles: ['ROLE_CUSTOMER', 'ROLE_VISITOR']
    }
};

export default MenuItems;