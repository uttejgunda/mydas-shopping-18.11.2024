import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import NotFound from "./components/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/products" component={ProductsPage} />
      <ProtectedRoute exact path="/cart" component={CartPage} />
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/cart" component={CartPage} /> */}
      {/* <Route component={NotFound} /> */}
      {/* <NotFound /> */}
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
