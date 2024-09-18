import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
