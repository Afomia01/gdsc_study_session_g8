import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Nav';
import Home from './Home';
import Product from './Product';
import ShoppingCart from './Shoppingcart';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
  );
};




export default App
