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
          item={item}
          //or {...item} "spread the item syntax", and get rid of .item in the card component, check the doc, but confusing to me at the moment

          />
})

  return (
    <div>
      <Navbar/>
      <Hero/>
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
