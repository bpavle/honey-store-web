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
import { CartProvider } from './components/CartContext';
import { EmployeesProvider } from './components/EmployeesContext'
import { ProductsProvider } from './components/ProductsContext'

import AddEmployee from './components/AddEmployee';
function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <Menu />
          <div style={{ textAlign: 'center' }}>
            <Route exact path="/home" component={Products} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/my-profile" component={MyProfile} />
            <EmployeesProvider>
              <Route exact path="/employees" component={Employees} />
              <Route exact path="/add-employee" component={AddEmployee} />
            </EmployeesProvider>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/" component={Products} />
          </div>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
