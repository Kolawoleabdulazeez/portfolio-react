import React from 'react'
import Linkedln from "../../src/asset/Linkedln.png"
import Twitter from "../asset/Twitter.png"
import Seyi from "../asset/Seyi.png"
import "../Components/HomeRight.css"

const HomeRight = () => {
  return (
    <div className='homeRight-content'>
        <div className='social-icon'>
            <img src={Linkedln} alt="" id='linkedln'/>
            <img src={Twitter} alt="" id='twitter'/>
        </div>
            <img src={Seyi} alt="" className='port-image'/>
     
    </div>
  )
}

export default HomeRight