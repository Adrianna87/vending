import React from "react";

import Vending from "./Vending";
import Chocolate from "./Chocolate"
import Chips from "./Chips"
import Cookies from "./Cookies"

import NavBar from "./NavBar"

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Vending />
        </Route>
        <Route exact path="/chocolate">
          <Chocolate />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/cookies">
          <Cookies />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;