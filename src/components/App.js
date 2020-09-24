import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import { createGlobalStyle } from "styled-components";

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
    </Switch>
  </main>
);

export default Main;
