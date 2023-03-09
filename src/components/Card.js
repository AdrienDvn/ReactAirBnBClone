import React from 'react';
import swimLogo from '../swimmerBnB.jpeg'
// import image from '/Users/adrien/code/BobZiroll/airbnbclone/src/catPNG.png';

export default function Card(props) {
  // console.log(props.openSpots);
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "online") {
    badgeText = "Online"
  }

  return (

      <div className='card'>
        {badgeText && <div className= 'card--badge'>{badgeText}</div>}
         {/* JS to say to display the css sold out badge only if the openSpots is empty */}

      {/* <img src={props.img} alt="" className="card--image"/> */}
        {/* <img src={`../${props.img}`} alt="" className="card--image"/> */}
        <img src= {swimLogo} alt="" className="card--image"/>
        <div className='card--stats'>
           <span><i class="fa-solid fa-star"></i>{props.stats.rating}</span>
           <span className='grey'>-({props.stats.reviewCount}) </span>
           <span className='grey'>-{props.location}</span>
        </div>
        <p > {props.title}</p>
        <p > {props.description}</p>
        <p > <span className='bold'>From {props.price} $USD</span> / person</p>
      </div>

  );
}
