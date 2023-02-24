// import logo from './logo.svg';
import React from 'react'
import './App.css';
import './index.css';
import './navbar.css';
import './hero.css';
import './card.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> the exercice is to creat an instance of a card before to RE display hero :)*/}
      <Card/>
    </div>
  );
}

export default App;
