import React from 'react'
import Linkedln from "../../src/asset/Linkedln.png"
import Twitter from "../asset/Twitter.png"
import "../Components/About.css"

const About = () => {
  return (
    <div className='section2'>
        <h1>About Me</h1>
        <p id='about-p'>Seyi Onifade is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to  solve real world problems.</p>

        <img src={Linkedln} alt="" id='linkedln'/>
        <img src={Twitter} alt="" id='twitter'/>
    </div>
  )
}

export default About