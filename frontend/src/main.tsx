/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterC from "./components/Footer";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <App />
      <FooterC />
    </BrowserRouter>
  </React.StrictMode>
  
  
);