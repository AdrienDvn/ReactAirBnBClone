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
const cards = data.map(item => {
  return <Card
          key={item.id}
          img={item.coverImg} // fix that because it is hard coded for now
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location = {item.location}
          title = {item.title}
          price = {item.price}
          id = {item.id}
          description = {item.description}
          stats = {item.stats}
          openSpots= {item.openSpots}
          />
})

  return (
    <div>
      <Navbar/>
      {/* <Hero/> the exercice is to creat an instance of a card before to RE display hero :)*/}
      {/* <div className="card--data"> */}
      <section className='cards-list'>
      {cards}
      </section>
      {/* </div> */}

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
