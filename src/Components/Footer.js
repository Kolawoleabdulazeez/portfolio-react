import React from 'react'
import Socials from "../../src/asset/Socials.png"
import Line from "../asset/Line.png"
import "../Components/Footer.css";


const Footer = () => {
  return (
    <div className='footer-section'>
     <div id='footer-content'>
     <div id='footer-header'>
            <img src={Line} id="Line"/>
            <h1>Seyi Onifade</h1>
            <img src={Line} id="Line"/>
        </div>
        <div id='footer-image'>
       <img src={Socials} id="social"/>
        </div>

        <div id='footernote'>
            <p>Copyright &copy All right reserved</p>
        </div>
     </div>

    </div>
  )
}

export default Footer