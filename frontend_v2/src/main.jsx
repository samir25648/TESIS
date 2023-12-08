import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import './components/navbar/navbar.css'
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
