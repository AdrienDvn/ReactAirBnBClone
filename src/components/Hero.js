import React from 'react';
import logo2 from '/Users/adrien/code/BobZiroll/airbnbclone/src/AirBnb photo grid.png'

export default function Hero() {
  return (
    <hero>
      <div className='container hero--container'>
        <img src={logo2} alt="" className="hero--gridpic"/>
        <h1> Online Experiences</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </hero>
  );
}
