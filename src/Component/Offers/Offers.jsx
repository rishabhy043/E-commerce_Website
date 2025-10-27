import React from 'react';
import exclusive from "../../assets/exclusive_image.webp"
import "./Offers.css";

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Best offers for you</h2>
               <p>ONLY ON BEST SELLERS  PRODUCTS</p>
               <button>check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offers