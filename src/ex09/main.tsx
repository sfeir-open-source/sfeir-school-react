import React from "react";
import { render } from "react-dom";

import { Config } from "../solution/Config";
import { HashRouter as Router } from "react-router-dom";
import { PeopleProvider } from "./PeopleContext";
// import { PeopleProvider } from "../solution/ex09/PeopleContext";
import { App } from "./App";
// import { App } from "../solution/ex09/App";

render(
  <Config useRouter={false}>
    <Router>
      <PeopleProvider>
        <App />
      </PeopleProvider>
    </Router>
  </Config>,
  document.getElementById("root")
);
