import React from 'react';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <HomePage />
    </div>
  );
}

export default App;
