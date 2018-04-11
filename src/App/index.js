import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Checkout from '../Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="shoppingCart">
        <Checkout />
      </div>
    );
  }
}

export default App;
