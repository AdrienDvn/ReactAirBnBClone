// import logo from './logo.svg';
import React from 'react'
import './App.css';
import './index.css';
import './navbar.css';
import './hero.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
