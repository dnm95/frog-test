import React from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Account from "../containers/Account";

import "bootstrap/dist/css/bootstrap.min.css";

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
