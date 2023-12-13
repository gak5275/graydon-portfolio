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
import Photos from "./pages/photos";
import Resume from "./pages/resume";
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
            <Route path="/photos" element={<Photos />} />
            <Route path="/resume" element={<Resume />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
          <br/>
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
      </Router>
  );
}

export default App;