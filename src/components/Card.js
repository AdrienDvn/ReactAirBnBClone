import React from 'react';
import swimLogo from '../swimmerBnB.jpeg'
// import image from '/Users/adrien/code/BobZiroll/airbnbclone/src/catPNG.png';

export default function Card(props) {
  // console.log(props);

  return (
    <card>
      <div className='card'>
      {/* <img src={props.img} alt="" className="card--image"/> */}
        {/* <img src={`../${props.img}`} alt="" className="card--image"/> */}
        <img src= {swimLogo} alt="" className="card--image"/>
        <div className='card--stats'>
           <span><i class="fa-solid fa-star"></i>{props.rating}</span>
           <span className='grey'>({props.reviewCount}) </span>
           <span className='grey'>{props.country}</span>
        </div>
        <p > {props.title}</p>
        <p > <span className='bold'>From {props.price} $USD</span> / person</p>
      </div>
    </card>
  );
}
