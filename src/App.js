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
import data from './data.js';

function App() {
const cardData = data.map(data => {
  return <Card
          id = {data.id}
          title = {data.title}
          description = {data.description}
          price = {data.price}
          coverImg = {data.coverImg}
          stats = {data.stats}
          location = {data.location}
          openSpots= {data.openSpots}
          />
})

  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> the exercice is to creat an instance of a card before to RE display hero :)*/}
      <div className="card--data">
      {cardData}
      </div>

    </div>
  );
}

export default App;

{/* <Card
        img='swimmerBnB.jpeg'
        rating="5.0"
        reviewCount= {6}
        country = "USA"
        title = 'Life lessons with Katie Zaferes'
        price={136}
      /> */}
