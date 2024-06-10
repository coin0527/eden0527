import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { GlobalStyled } from "./css/GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router />
  </React.StrictMode>
);
//0610
