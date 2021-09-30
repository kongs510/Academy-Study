import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Main from './router1/Main';
import NotProduct from './router1/NotProduct';
import ProductDetail from './router1/ProductDetail';
import Products from './router1/Products';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li> <Link to="/">home</Link> </li>
          <li> <Link to="/products">Products</Link> </li>
        </ul>
      </nav>

      {/* 화면에 보이는 부분 */}
      <Switch>
        <Route exact path="/"> <Main /> </Route>
        <Route path="/products" exact> <Products /> </Route>
        <Route path="/products/:productId" exact> <ProductDetail /> </Route>
        <Route path="*"><NotProduct /> </Route>
      </Switch>
    </Router>
  );
};

export default App;