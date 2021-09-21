//import logo from './logo.svg';

import './App.css';
import { Route } from 'react-router-dom';
//Components
import Header from './components/Header'
import Menu from './components/Menu'
import Products from './components/Products'
import About from './components/About';
import Contact from './components/Contact';
//Contexts
import { CartProvider } from './components/Contexts/CartContext';
import { EmployeesProvider } from './components/Contexts/EmployeesContext'
import { ProductsProvider } from './components/ProductsContext'
import { UserProvider } from './components/Contexts/UserContext';

//Utils
import PrivateRoute from './utils/PrivateRoute';
import MenuItems from './utils/Menu'
function App() {
  return (

    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <Menu MenuItems={MenuItems} />
            <div style={{ textAlign: 'center' }}>
              <PrivateRoute exact {...MenuItems.homePage} />
              <Route exact path="/about-us" component={About} />
              <PrivateRoute {...MenuItems.orders} exact />
              <EmployeesProvider>
                <PrivateRoute exact {...MenuItems.employees} />
                <PrivateRoute exact {...MenuItems.addEmployee} />
              </EmployeesProvider>
              <PrivateRoute exact {...MenuItems.myProfile} />
              <Route exact path="/contact" component={Contact} />
              <PrivateRoute exact {...MenuItems.login} />
              <Route exact {...MenuItems.registration} />
              <PrivateRoute exact {...MenuItems.cart} />
              <Route exact path="/" component={Products} />
            </div>
          </div>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>

  );
}

export default App;
