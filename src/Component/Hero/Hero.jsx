import React from 'react'
import handicon from "../../assets/hand_icon.png";
import arrowicon from "../../assets/arrow_icon.png";
import men from "../../assets/men.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <>
    <div className='hero-left'>
<h3>Grab your Products at...</h3>
    <h2>Best Deals ! Best Offers at best Prices...</h2>
<div className='hand-hand-icon'>
    <p>new</p>
    <img src={handicon} alt="" />
    <p>Collections</p>
    <p>for Everyone</p>
    <div className='hero-latest-btn'>
        <div>Latest Collections</div>
        <img src={arrowicon} alt="" />
    </div>
</div>
    </div>
    <div className='hero-right'>
        <img src={men} alt="image not found" />
    </div>
    
    </>
  )
}

export default Hero