import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "normalize.css/normalize.css";
import "material-components-web/dist/material-components-web.min.css";
import "rmwc/styles";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
