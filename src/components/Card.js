import React from 'react';
import logo3 from '/Users/adrien/code/BobZiroll/airbnbclone/src/swimmerBnB reactcard.jpeg'

export default function Card() {
  return (
    <card>
      <div className='card'>
        <div className='card--pic container'>
          <img src={logo3} alt="" className="hero--gridpic"/>
          <button type="button" class="btn btn-tertiary card--button">Sold out
          </button>
        </div>
        <div className='Card--infos'>
          star icon(png)
          <i class="fa-solid fa-star"></i>
          rating
          country
          review count
          title
          cost/person
        </div>
        <p className="card--p">Card js p blablablablablablablablablablabla</p>
      </div>
    </card>
  );
}
