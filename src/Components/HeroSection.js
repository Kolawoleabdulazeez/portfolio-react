import React from 'react'
import "../Components/HeroSection.css"
import Linkedln from "../../src/asset/Linkedln.png"
import Twitter from "../asset/Twitter.png"

const HeroSection = () => {
  return (
    <div className='heroSection'>
        <div className='hero-header'>
        <h6>HI THERE </h6>
        <h5>I AM SEYI ONIFADE</h5>
        <h2>A Top-notch Developer, </h2>
        <h2>Writer and Mentor.</h2>
        
            <img src={Linkedln} alt="" id='linkedln'/>
            <img src={Twitter} alt="" id='twitter'/>
       
    </div>
    </div>
  )
}

export default HeroSection