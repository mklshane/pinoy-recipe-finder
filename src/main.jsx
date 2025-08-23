import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { FavoriteProvider } from "./context/FavoriteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </React.StrictMode>
);
