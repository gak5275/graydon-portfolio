import logo from './logo.svg';
import './App.css';
import murray from './images/murray.png';
import { useState } from 'react';

import React from "react";
import Navbar from "./components/Navbar/NavbarElements";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import Art from "./pages/art";
import Stardew from "./pages/stardew";
import Games from "./pages/games";
import Extra from "./pages/extra";

function App() {
  return (
      <Router>
        <Navbar />
          <title>Graydon Kupfer's Digital Portfolio</title>
          <h1>Graydon Kupfer's Digital Portfolio</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route
              path="/stardew"
              element={<Stardew />}
          />
            <Route
                path="/games"
                element={<Games />}
            />
          <Route path="/extra" element={<Extra />} />
        </Routes>
      </Router>
  );
}

export default App;