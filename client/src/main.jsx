import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { parseCookies } from "./components/tools.js";

import "./index.css";

let cookieObj = parseCookies();
let theme;

if (cookieObj.theme) {
  theme = cookieObj.theme;
} else theme = "dark";

document.documentElement.classList.add(
  theme,
  "bg-bgPrimary",
  "text-textPrimary"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
