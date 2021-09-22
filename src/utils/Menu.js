
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
const MenuItems = {
    homePage: {
        label: "Products",
        component: Products,
        path: '/home',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER'],
        right: false
    },
    about: {
        label: "About",
        component: About,
        path: '/about-us',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER'],
        right: false
    },
    orders: {
        label: "Orders",
        component: Orders,
        path: '/orders',
        roles: ['ROLE_ADMIN', 'ROLE_SELLER'],
        right: false
    },
    myProfile: {
        label: "My Profile",
        component: MyProfile,
        path: '/my-profile',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_SELLER'],
        right: false
    },
    employees: {
        label: "Employees",
        component: Employees,
        path: '/employees',
        roles: ['ROLE_ADMIN'],
        right: false
    },
    addEmployee: {
        label: "Add Employee",
        component: AddEmployee,
        path: '/add-employee',
        roles: ['ROLE_ADMIN'],
        right: false
    },
    contact: {
        label: "Contact",
        component: Contact,
        path: '/contact',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_VISITOR', 'ROLE_SELLER'],
        right: false
    },
    login: {
        label: "Login",
        component: Login,
        path: '/login',
        roles: ['ROLE_VISITOR'],
        right: false
    },
    registration: {
        label: "Registration",
        component: Registration,
        path: '/registration',
        roles: ['ROLE_VISITOR'],
        right: false
    },
    cart: {
        label: "Cart",
        component: Cart,
        path: '/cart',
        roles: ['ROLE_CUSTOMER', 'ROLE_VISITOR'],
        right: true
    },
    logout: {
        label: "Logout",
        component: Logout,
        path: '/logout',
        roles: ['ROLE_CUSTOMER', 'ROLE_ADMIN', 'ROLE_SELLER'],
        right: false,

    }
};

export default MenuItems;