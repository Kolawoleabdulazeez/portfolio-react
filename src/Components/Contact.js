import React from 'react'
import Linkedln from "../../src/asset/Linkedln.png"
import Twitter from "../asset/Twitter.png"
import Mail from "../../src/asset/Mail.png"
import Tel from "../asset/Tel.png"
import "../Components/Contact.css"

const Contact = () => {
  return (
    <div className='contact-section'>
        <div id='contact-left'>
            <div className='contact-head'>
            <h1>Get In Touch.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras <br/> nec sollicitudin tellus. Phasellus ac nisi augue.</p>
            </div>
            <div id='contact-info'>
            <img src={Linkedln} alt="" id='linkedln'/>
            <img src={Twitter} alt="" id='twitter'/>

            <h5>-Xyluz</h5>
            </div>
            <div id='info-1'>
                <img src={Mail} alt="mail-image"/>
                <div id="info-detail">
                <h5>seyionifade@gmail.com</h5>
                <h6>Send a message Anytime!</h6>
                </div>
            </div>
            <div id='info-2'>
            <img src={Tel} alt="mail-image"/>
                <div id="info-detail">
                <h6>+234 - 1245 - 13966</h6>
                Send a message Anytime!
                </div>
            </div>
        </div>
        <div id='contact-right'>
            <form>
                <h4>Need a Service?</h4>
                <h2> Send A Message</h2>

               <div className='input-info'><br/>
               <label for="fullName" id='fullName'>Enter Fullname</label><br/>
                <input type="text" id="fullName"/><br/>
                <label for="mail" id='mail'>Enter Email Address</label><br/>
                <input type="mail" id="mail"/><br/>
                <label for="message" id='fullName'>Write A Message</label><br/>
                <input type="text" id="message"/>
               </div>

                <button id='btn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact