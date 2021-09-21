import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header'
import Menu from './components/Menu'
import Products from './components/Products'
import About from './components/About';
import MyProfile from './components/MyProfile';
import Orders from './components/Orders';
import Employees from './components/Employees';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import Cart from './components/Cart';
import { CartProvider } from './components/Contexts/CartContext';
import { EmployeesProvider } from './components/Contexts/EmployeesContext'
import { ProductsProvider } from './components/ProductsContext'

import AddEmployee from './components/AddEmployee';
import { UserProvider } from './components/Contexts/UserContext';
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (

    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <Menu />
            <div style={{ textAlign: 'center' }}>
              <Route exact path="/home" component={Products} />
              <Route exact path="/about-us" component={About} />
              <PrivateRoute roles={["ROLE_ADMIN", "ROLE_EMPLOYEE"]} exact path="/orders" element={Orders} />
              <EmployeesProvider>
                <PrivateRoute roles={["ROLE_ADMIN"]} exact path="/employees" element={Employees} />
                <PrivateRoute roles={["ROLE_ADMIN"]} exact path="/add-employee" element={AddEmployee} />
              </EmployeesProvider>
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <PrivateRoute roles={["ROLE_VISITOR", "ROLE_USER"]} exact path="/cart" element={Cart} />
              <Route exact path="/" component={Products} />
            </div>
          </div>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>

  );
}

export default App;
