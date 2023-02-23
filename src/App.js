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










{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}
