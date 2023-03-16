import React from 'react';
// import swimLogo from '../swimmerBnB.jpeg'
// import image from '/Users/adrien/code/BobZiroll/airbnbclone/src/catPNG.png';

export default function Card(props) {
  console.log(props);

  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "online") {
    badgeText = "Online"
  }

  return (

      <div className='card'>
        {badgeText && <div className= 'card--badge'>{badgeText}</div>}
         {/* JS to say to display the css sold out badge only if the openSpots is empty */}

         <img src={props.item.coverImg} alt="" className="card--image container"/>
        {/* <img src= {swimLogo} alt="" className="card--image"/> */}
        <div className='card--stats'>
           <span><i class="fa-solid fa-star"></i>{props.item.stats.rating}</span>
           <span className='grey'>-({props.item.stats.reviewCount}) </span>
           <span className='grey'>-{props.item.location}</span>
        </div>
        <p > {props.item.title}</p>
        <p > {props.description}</p>
        <p > <span className='bold'>From {props.item.price} $USD</span> / person</p>
      </div>

  );
}
