// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Rwd from "./components/Rwd/Rwd";
import PhotoGallery from "./components/photogallery/PhotoGallery";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-5">
        <Routes>
          <Route path="/rwd" element={<Rwd />} />
          <Route path="/gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
