import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header'
import Menu from './components/Menu'
import Products from './components/Products'
import About from './components/About';
import MyProfile from './components/MyProfile';
import Orders from './components/Orders';
function App() {
  return (<div className="App">
    <Header />
    <Menu />
    <div style={{ textAlign: 'center' }}>
      <Route exact path="/home" component={Products} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/my-profile" component={MyProfile} />
    </div>
  </div>
  );
}

export default App;
