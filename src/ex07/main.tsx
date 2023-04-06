import React from "react";
import { render } from "react-dom";
import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";

import { App } from "./App";
// import { App } from "../solution/ex07/App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
