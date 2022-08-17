import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./components/Connexion";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Inscription from "./components/Inscription";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inscription" element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
