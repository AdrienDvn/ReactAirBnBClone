import React from 'react';
import logo from '/Users/adrien/code/BobZiroll/airbnbclone/src/Airbnb_Logo_.png'

export default function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <img src={logo} alt="" className="navbar--pic"/>
      </div>
    </nav>
  );
}
