import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";

import { App, router } from "./App";
// import { App } from "../solution/ex07/App";

render(<RouterProvider router={router} />, document.getElementById("root"));
