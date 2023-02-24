import React from 'react';
import logo2 from '/Users/adrien/code/BobZiroll/airbnbclone/src/AirBnb photo grid.png'

export default function Hero() {
  return (
    <hero>
      <div className='container hero--container'>
        <img src={logo2} alt="" className="hero--gridpic"/>
        <h1 className="hero--h1"> Online Experiences</h1>
        <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>
    </hero>
  );
}
