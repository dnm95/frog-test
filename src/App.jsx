import React from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Account from "./containers/Account";

import "bootstrap/dist/css/bootstrap.min.css";

/*
  Switch and Route from react-router-dom help us to control and mantain all the routes for the project.
  createGlobalStyle is used for settling global styles, in this case for font size and blocking
  horizontal overflow.
  Home, Login, Register and Account are the main containers or pages that will be rendered depending
  on the route.
  The last import is for the bootstap styles.
*/

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    font-family: 'Comfortaa', cursive;
  }
`

const Main = () => (
  <main className="App">
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Account} />
    </Switch>
  </main>
);

export default Main;
