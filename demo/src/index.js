import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/main.css";
import "./css/util.css";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Game from "./Game";
import App from "./App";
import Div1 from "./Div1";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Div1} />
      <Route path="/game/:id" component={Game} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
