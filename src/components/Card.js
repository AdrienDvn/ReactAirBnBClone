import React from 'react';
import logo3 from '/Users/adrien/code/BobZiroll/airbnbclone/src/swimmerBnB reactcard.jpeg'

export default function Card() {
  return (
    <card>
      <div className='card'>
          <img src={logo3} alt="" className="card--image"/>
          {/* <button type="button" class="btn btn-tertiary card--button">Sold out */}
          {/* </button> */}
        <div className='card--stats'>
           <span><i class="fa-solid fa-star"></i>5.0</span>
           <span className='grey'>(6) </span>
           <span className='grey'>USA</span>
        </div>
          <p > Life lessons with Katie Zaferes</p>
          <p > <span className='bold'>From 136 $USD</span> / person</p>
      </div>
    </card>
  );
}
