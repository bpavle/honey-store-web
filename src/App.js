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
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div style={{ textAlign: 'center' }}>

        <Route exact path="/home" component={Products} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Registration" component={Registration} />
        <Route exact path="/" component={Products} />
        {/* <Route default component={Products} /> */}
      </div>
    </div>
  );
}

export default App;
