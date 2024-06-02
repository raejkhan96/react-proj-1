import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './views/HomePage/HomePage';
import Track from './views/tracker/track';
import About from './views/about/about';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* navbar will appear on everypage */}
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/track!" element={<Track />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
