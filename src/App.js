import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from './pages/home/home'
import { Products } from './pages/products/products'
import { Item } from './pages/item/item'
import { Info } from './pages/info/info'
import { NotFound } from './pages/404/404'

class App extends Component {
  componentWillMount() {
    window['dataLayer'].push({
      specialPrice: '',
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/" exact component={Products} />
          <Route path="/products/:id/" exact component={Item} />
          <Route path="/info/" exact component={Info} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
