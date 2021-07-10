import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import Brew from "./components/Brew";
import Sweets from "./components/Sweets";
import Checkout from "./components/Checkout";

function App() {
  return (
    // make the store available to react components
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/sweets">
            <Sweets />
          </Route>
          <Route path="/brew">
            <Brew />
          </Route>
          <Route path="/detail/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
